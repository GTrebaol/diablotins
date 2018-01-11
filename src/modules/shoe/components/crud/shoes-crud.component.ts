import { Component, OnInit } from "@angular/core";
import { ShoeService } from "../../../../shared/services/shoe.service";
import { ActivatedRoute } from "@angular/router";
import { Shoe } from "../shoes/shoe";

@Component({
  selector: 'shoes-crud',
  templateUrl: 'shoes-crud.component.html'
})
export class ShoesCrudComponent implements OnInit {

  private shoe: Shoe;

  constructor(private _shoeService: ShoeService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  addShoe() {
    if (this._checkInfo(this.shoe)) {
      this._shoeService.addShoe(this.shoe).subscribe(response => {

      })
    }

  }

  _checkInfo(shoe: Shoe) {
    return shoe.brandId && shoe.colors.length > 0 && shoe.name !== '';
  }
}
