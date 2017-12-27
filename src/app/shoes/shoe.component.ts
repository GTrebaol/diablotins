import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ShoeService } from "./shoe.service";
import { Shoe } from "./shoe";

@Component({
  selector: 'app-shoe',
  templateUrl: 'shoe.component.html',
  styleUrls: ['shoe.component.css']
})
export class ShoeComponent implements OnInit {

  private shoeId: number;
  private shoe: Shoe;

  constructor(private _shoeService: ShoeService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.shoeId = params['id'];
    });

    this._getDetailShoe(this.shoeId);
  }

  ngOnInit() {
  }

  _getDetailShoe(_id) {
    this._shoeService.getDetailShoe(_id).subscribe(shoe => {
      this.shoe = shoe
    });
  }

}
