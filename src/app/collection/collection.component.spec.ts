import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {inject} from "@angular/core/testing";
import {CollectionComponent} from "./collection.component";
import {ShoeService} from "../shoes/shoe.service";
import {HttpClient} from "@angular/common/http";
import {HttpHandler} from "@angular/common/http";
import {Routes} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpTestingController} from "@angular/common/http/testing";
import {environment} from "environments/environment";

describe('CollectionComponent', () => {
  let component: CollectionComponent;
  let fixture: ComponentFixture<CollectionComponent>;
  const API_URL = environment.apiUrl;

  class MyComponent {
  }

  const fake_routes: Routes = [
    {path: 'home', component: MyComponent},
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ShoeService, HttpClient, HttpHandler],
      imports: [RouterTestingModule.withRoutes(fake_routes)],
      declarations: [CollectionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(() => {
    inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
      backend.expectOne({
        url: API_URL + '/shoes/collection/1',
        method: 'GET'
      });
    });
    expect(component).toBeTruthy();
  }));
});
