import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Response } from "@angular/http";
import { Shoe } from "../../modules/shoe/components/shoes/shoe";

const API_URL = environment.apiUrl;

@Injectable()
export class ShoeService {

  private shoeServiceUrl: string = '/shoes';
  private brandServiceUrl: string = '/brands';
  private collectionServiceUrl: string = '/collections';
  private categoryServiceUrl: string = '/categories';
  private colorServiceUrl: string = '/colors';

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
    return this.httpClient.put(API_URL + this.shoeServiceUrl + '/' + shoeIdToEdit, shoe);
  }

  public deleteShoe(shoeIdToDelete: number) {
    return this.httpClient.delete(API_URL + this.shoeServiceUrl + '/' + shoeIdToDelete);
  }

  public getBrands(): Observable<any> {
    return this.httpClient.get(API_URL + this.brandServiceUrl);
  }

  public getCollections(): Observable<any> {
    return this.httpClient.get(API_URL + this.collectionServiceUrl);
  }

  public getCategories(): Observable<any> {
    return this.httpClient.get(API_URL + this.categoryServiceUrl);
  }

  public getColors(): Observable<any> {
    return this.httpClient.get(API_URL + this.colorServiceUrl);
  }

}
