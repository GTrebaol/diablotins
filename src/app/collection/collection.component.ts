import {Component, OnInit} from "@angular/core";
import {ShoeService} from "../shoes/shoe.service";
import {ActivatedRoute} from "@angular/router";
import {Shoe} from "../shoes/shoe";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  private collectionId = 1;
  private shoes = Array<Shoe>();

  constructor(private _shoeService: ShoeService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.collectionId = params['id'];
    })
  }

  ngOnInit() {
    this._getShoesFromCollection(this.collectionId);
  }

  _getShoesFromCollection(_id) {
    this._shoeService.getShoesFromCollection(_id).subscribe(
      data => {
        this.shoes = data
      },
      err => console.log(err)
    );
  }

}
