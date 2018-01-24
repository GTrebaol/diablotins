import { Component, OnInit } from "@angular/core";
import { ShoeService } from "../../../../shared/services/shoe.service";
import { Shoe } from "../shoes/shoe";
import { PagerService } from "../../../../shared/services/pager.service";
import { Router } from "@angular/router";
import { ConfirmationDialog } from "../../../../app/components/core/confirmation-dialog/confirmation-dialog.component";
import { MatDialog } from "@angular/material";
import * as _ from "lodash";

@Component({
  selector: 'shoes-crud-list',
  templateUrl: 'shoes-crud-list.component.html',
  host: {'class': 'col-sm-9'}
})
export class ShoesCrudListComponent implements OnInit {

  private shoes: Shoe[];
  private shoesQuantity: number;
  private pageAsked: number = 1;
  private pageSize: number = 10;
  private pager;

  constructor(public dialog: MatDialog, private router: Router,
              private _shoeService: ShoeService, private _pagerService: PagerService) {
    this.getShoesForPage(this.pageAsked);
  }

  getShoesForPage(page: number) {
    this._shoeService.getShoes(page).subscribe(response => {
      this.shoes = response.shoes;
      this.shoesQuantity = response.shoesQuantity;
      this.pageAsked = response.pageAsked;
      this.pageSize = response.pageSize;
      this.pager = this._pagerService.getPager(parseInt(response.shoesQuantity), parseInt(response.pageAsked), parseInt(response.pageSize));
    })
  }

  updateShoe(id: number) {
    this.router.navigate(['admin/dashboard/shoes/edit/' + id]);
  }

  createShoe() {
    this.router.navigate(['admin/dashboard/shoes/add']);
  }

  deleteShoe(id: number) {
    let dialogRef = this.dialog.open(ConfirmationDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this._shoeService.deleteShoe(id).subscribe(response => {
          if (response) {
            _.remove(this.shoes, function (shoe) {
              return shoe.shoe_id === id;
            })
          }
        });
      }
    })
  }


  ngOnInit() {
  }


}
