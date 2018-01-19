import { Injectable } from "@angular/core";
import * as _ from "lodash";
import { Pager } from "../models/pager.model";

@Injectable()
export class PagerService {


  public pager: Pager;

  constructor() {
    this.pager = new Pager();
  }

  public getPager(itemsQuantity: number, currentPage: number, pageSize: number): Pager {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 10
    pageSize = pageSize || 10;

    // calculate total pages
    let totalPages = Math.ceil(itemsQuantity / pageSize);

    let startPage, endPage;
    console.log(totalPages);
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, itemsQuantity - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = _.range(startPage, endPage + 1);

    // return object with all pager properties required by the view

    this.pager.totalItems = itemsQuantity;
    this.pager.currentPage = currentPage;
    this.pager.pageSize = pageSize;
    this.pager.totalPages = totalPages;
    this.pager.startPage = startPage;
    this.pager.endPage = endPage;
    this.pager.startIndex = startIndex;
    this.pager.endIndex = endIndex;
    this.pager.pages = pages;
    return this.pager;
  }
}
