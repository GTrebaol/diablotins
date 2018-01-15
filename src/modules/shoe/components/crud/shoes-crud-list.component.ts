import { Component, OnInit } from "@angular/core";
import { ShoeService } from "../../../../shared/services/shoe.service";
import { ActivatedRoute } from "@angular/router";
import { Shoe } from "../shoes/shoe";

@Component({
  selector: 'shoes-crud-list',
  templateUrl: 'shoes-crud-list.component.html'
})
export class ShoesCrudListComponent implements OnInit {

  private shoes: Shoe[];

  constructor(private _shoeService: ShoeService, private route: ActivatedRoute) {
    this._shoeService.getShoes(1).subscribe(response => {
      this.shoes = response.shoes;
    })
  }

  ngOnInit() {
  }


}
