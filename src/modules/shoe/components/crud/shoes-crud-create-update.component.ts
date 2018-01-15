import { Component, OnInit } from "@angular/core";
import { ShoeService } from "../../../../shared/services/shoe.service";
import { ActivatedRoute } from "@angular/router";
import { Shoe } from "../shoes/shoe";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'shoes-crud-create-update',
  templateUrl: 'shoes-crud-create-update.component.html'
})
export class ShoesCrudCreateUpdateComponent implements OnInit {

  private shoe: Shoe;
  private shoeIdToEdit: number;

  constructor(private _shoeService: ShoeService, private route: ActivatedRoute, private _toastr: ToastrService) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.shoeIdToEdit = params['id'];
      }
    });
  }

  ngOnInit() {
    //Cas d'une édition
    if (this.shoeIdToEdit) {
      this._getDetailShoe(this.shoeIdToEdit);
    }
  }

  addOrEditShoe() {
    if (this._checkInfo(this.shoe)) {
      if (!this.shoeIdToEdit) {
        this._shoeService.addShoe(this.shoe).subscribe(response => {
          this._toastr.success('Chaussure ajoutée')
        })
      } else {
        this._shoeService.editShoe(this.shoeIdToEdit, this.shoe).subscribe(response => {
          this._toastr.success('Chaussure Editée')
        })
      }

    }

  }

  _getDetailShoe(_id) {
    this._shoeService.getDetailShoe(_id).subscribe(shoe => {
      this.shoe = shoe;
    })
  }

  _checkInfo(shoe: Shoe) {
    return shoe.brandId && shoe.colors.length > 0 && shoe.name !== '';
  }
}
