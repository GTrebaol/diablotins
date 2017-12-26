import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Shoe} from "./shoe";
import {Observable} from "rxjs";

const API_URL = environment.apiUrl;

@Injectable()
export class ShoeService {

  private http;

  constructor(private http: HttpClient) {
    this.http = http;
  }

  public getShoesFromCollection(collectionId: number): Observable<Shoe[]> {
    return this.http.get(API_URL + '/shoes/collection/' + collectionId);
  }
}
