import { Component, OnInit } from "@angular/core";
import { ShoeService } from "../../../../shared/services/shoe.service";
import { Shoe } from "../shoes/shoe";
import { PagerService } from "../../../../shared/services/pager.service";

@Component({
  selector: 'shoes-crud-list',
  templateUrl: 'shoes-crud-list.component.html'
})
export class ShoesCrudListComponent implements OnInit {

  private shoes: Shoe[];
  private shoesQuantity: number;
  private pageAsked: number = 1;
  private pageSize: number = 10;
  private pager;

  constructor(private _shoeService: ShoeService, private _pagerService: PagerService) {
    this.getShoesForPage(this.pageAsked);
  }

  getShoesForPage(page: number) {
    console.log('getShoesForPage : ' + page);
    this._shoeService.getShoes(page).subscribe(response => {
      this.shoes = response.shoes;
      this.shoesQuantity = response.shoesQuantity;
      this.pageAsked = response.pageAsked;
      this.pageSize = response.pageSize;
      this.pager = this._pagerService.getPager(parseInt(response.shoesQuantity), parseInt(response.pageAsked), parseInt(response.pageSize));
    })
  }

  typeof(variable) {
    return typeof variable;
  }

  ngOnInit() {
  }


}
