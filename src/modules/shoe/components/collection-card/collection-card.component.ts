import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Shoe } from "../shoes/shoe";
import * as _ from "lodash";

@Component({
  selector: 'app-collection-card',
  templateUrl: 'collection-card.component.html',
  styleUrls: ['collection-card.component.css']
})
export class CollectionCardComponent implements OnInit {

  @Input() shoe: Shoe;
  image_url: string;

  constructor() {
  }

  ngOnInit() {
    let image = _.find(this.shoe['pictures'], function (image) { return image.is_primary });
    if (image) {
      this.image_url = image.url;
    }
  }

}
