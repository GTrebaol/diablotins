import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Response } from "@angular/http";
import { Shoe } from "../../modules/shoe/components/shoes/shoe";

const API_URL = environment.apiUrl;

@Injectable()
export class ShoeService {

  private serviceURL = '/shoes';

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

  constructor(private httpClient: HttpClient) {
  }

  public getShoesFromCollection(collectionId: number): Observable<any> {
    return this.httpClient.get(API_URL + this.serviceURL + '/collection/' + collectionId);
  }

  public getDetailShoe(_idShoe: number): Observable<any> {
    return this.httpClient.get(API_URL + this.serviceURL + _idShoe)
  }

  public addShoe(shoe: Shoe): Observable<any> {
    return this.httpClient.post(API_URL + this.serviceURL, shoe);

  }
}
