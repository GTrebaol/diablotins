import { Component, OnInit } from "@angular/core";
import { ShoeService } from "../shoes/shoe.service";
import { ActivatedRoute } from "@angular/router";
import { Shoe } from "../shoes/shoe";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  private collectionId;
  private shoes: Shoe[];

  constructor(private _shoeService: ShoeService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.collectionId = params['id'];
    });

    this._getShoesFromCollection(this.collectionId);
  }

  ngOnInit() {
  }

  _getShoesFromCollection(_id) {
    this._shoeService.getShoesFromCollection(_id).subscribe(shoes => {
      this.shoes = shoes
    });
  }

}
