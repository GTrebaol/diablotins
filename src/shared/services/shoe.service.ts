import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Response } from "@angular/http";
import { Shoe } from "../../modules/shoe/components/shoes/shoe";
import { Brand } from "../models/brand.model";
import { Collection } from "../models/collection.model";
import { Category } from "../models/category.model";

const API_URL = environment.apiUrl;

@Injectable()
export class ShoeService {

  private shoeServiceUrl = '/shoes';
  private brandServiceUrl = '/brands';
  private collectionServiceUrl = '/collections';
  private categoryServiceUrl = '/categories';

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

  constructor(private httpClient: HttpClient) {
  }

  public getShoesFromCollection(collectionId: number): Observable<any> {
    return this.httpClient.get(API_URL + this.shoeServiceUrl + '/collection/' + collectionId);
  }

  public getDetailShoe(_idShoe: number): Observable<any> {
    return this.httpClient.get(API_URL + this.shoeServiceUrl + '/' + _idShoe)
  }

  public addShoe(shoe, collections, categories, sizes, images): Observable<any> {
    return this.httpClient.post(API_URL + this.shoeServiceUrl, {
      shoe: shoe,
      collections: collections,
      categories: categories,
      sizes: sizes,
      images: images
    });
  }

  public getShoes(page: number): Observable<any> {
    return this.httpClient.get(API_URL + this.shoeServiceUrl + '?pageNumber=' + page.toString());
  }

  public editShoe(shoeIdToEdit: number, shoe: Shoe) {
    return this.httpClient.post(API_URL + this.shoeServiceUrl + '/' + shoeIdToEdit, shoe);
  }

  public deleteShoe(shoeIdToDelete: number) {
    return this.httpClient.delete(API_URL + this.shoeServiceUrl + '/' + shoeIdToDelete);
  }

  public getBrands(): Observable<Brand[]> {
    return this.httpClient.get(API_URL + this.brandServiceUrl);
  }

  public getCollections(): Observable<Collection[]> {
    return this.httpClient.get(API_URL + this.collectionServiceUrl);
  }

  public getCategories(): Observable<Category[]> {
    return this.httpClient.get(API_URL + this.categoryServiceUrl);
  }
}
