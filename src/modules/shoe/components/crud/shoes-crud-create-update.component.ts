import { Component, OnInit } from "@angular/core";
import { ShoeService } from "../../../../shared/services/shoe.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Shoe } from "../shoes/shoe";
import { ToastrService } from "ngx-toastr";
import { FormControl, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Brand } from "../../../../shared/models/brand.model";
import { Collection } from "../../../../shared/models/collection.model";
import { Category } from "../../../../shared/models/category.model";
import { Observable } from "rxjs";

@Component({
  selector: 'shoes-crud-create-update',
  templateUrl: 'shoes-crud-create-update.component.html',
  host: {'class': 'col-sm-9'}
})
export class ShoesCrudCreateUpdateComponent implements OnInit {

  private shoe: Shoe;
  private shoeIdToEdit: number;
  private brands: Brand[];
  private collections: Collection[];
  private categories: Category[];
  private shoeForm = new FormGroup({
    shoe: new FormGroup({
      reference: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      brand: new FormControl(),
      description: new FormControl()
    }),
    categories: new FormControl(),
    collections: new FormControl(),
  });

  constructor(private _shoeService: ShoeService, private route: ActivatedRoute, private router: Router,
              private _toastr: ToastrService) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.shoeIdToEdit = params['id'];
      }
    });
  }

  ngOnInit() {
    //Cas d'une édition
    let promises = [
      this._shoeService.getBrands(),
      this._shoeService.getCollections(),
      this._shoeService.getCategories()
    ];
    if (this.shoeIdToEdit) {
      promises.push(this._shoeService.getDetailShoe(this.shoeIdToEdit));
    }
    Observable.forkJoin(promises)
      .subscribe(responses => {
        this.brands = responses[0];
        this.collections = responses[1];
        this.categories = responses[2];
        if (this.shoeIdToEdit) {
          this.shoe = responses[3];
          this._loadForm();
        }
      });

  }

  onSubmit(): void {
    if (this._checkInfo(this.shoeForm)) {
      if (!this.shoeIdToEdit) {
        this._shoeService.addShoe(
          this.shoeForm.get('shoe').value,
          this.shoeForm.get('collections').value,
          this.shoeForm.get('categories').value,
          null,
          null).subscribe(response => {
          this._toastr.success('Chaussure ajoutée');
          this.router.navigate(['admin/dashboard/shoes']);
        })
      } else {
        this._shoeService.editShoe(this.shoeIdToEdit, this.shoe).subscribe(response => {
          this._toastr.success('Chaussure Editée')
        })
      }
    }
  }


  _loadForm() {
    this.shoeForm.get('shoe').patchValue({
      name: this.shoe.name,
      price: this.shoe.price,
      brand: this.shoe['brand'].brand_id,
      description: this.shoe['description']['full_description']
    });
    this.shoeForm.patchValue({categories: this.shoe['categories'].map(cat => cat.category_id)});
    this.shoeForm.patchValue({collections: this.shoe['collections'].map(col => col.collection_id)});
  }

  _checkInfo(shoeForm: FormGroup) {
    return shoeForm.get('shoe') && shoeForm.get('collections') && shoeForm.get('categories');// && shoeForm.get('colors') && shoeForm.get('sizes');
  }
}
