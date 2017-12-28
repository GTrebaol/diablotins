import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ShoeService } from "./shoe.service";
import { Shoe } from "./shoe";
import * as _ from "lodash";

@Component({
  selector: 'app-shoe',
  templateUrl: 'shoe.component.html',
  styleUrls: ['shoe.component.css']
})
export class ShoeComponent implements OnInit {
  private shoeId: number;
  private shoe: Shoe;
  private selectedImage: Object;
  private selectedColor: Object;
  private selectedImages: Object[];

  constructor(private _shoeService: ShoeService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.shoeId = params['id'];
    });
  }

  ngOnInit() {
    this._getDetailShoe(this.shoeId);
  }

  changeImage(image: Object) {
    this.selectedImage = image;
  }

  changeColor(color:Object){
    this.selectedColor = color;
    this._selectDefaultImage();
    this._selectImagesFromColor();
  }

  _getDetailShoe(_id) {
    this._shoeService.getDetailShoe(_id).subscribe(shoe => {
      this.shoe = shoe
      this._selectDefaultColor();
      this._selectDefaultImage();
      this._selectImagesFromColor();
    });
  }

  _selectDefaultImage() {
    if (this.shoe) {
      let image;
      for (let img of this.shoe['pictures']) {
        if (img.is_primary && this.selectedColor['color_id'] === img.color_id) {
          image = img;
          break;
        }
      }
      this.selectedImage = image;
    }
  }

  _selectDefaultColor() {
    if (this.shoe) {
      this.selectedColor = this.shoe.colors[0];
    }
  }

  _selectImagesFromColor() {
    let images: Object[] = [];
    for (let img of this.shoe['pictures']) {
      if (img.color_id === this.selectedColor['color_id']) {
        images.push(img);
      }
    }
    this.selectedImages = images;
  }

}
