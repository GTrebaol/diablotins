import {TestBed, inject} from "@angular/core/testing";
import {ShoeService} from "./shoe.service";
import {HttpClientModule} from "@angular/common/http";

describe('ShoeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ShoeService]
    });
  });

  it('should be created', inject([ShoeService], (service: ShoeService) => {
    expect(service).toBeTruthy();
  }));
});
