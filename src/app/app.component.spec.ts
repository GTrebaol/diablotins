/* tslint:disable:no-unused-variable */
import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/core/footer/footer.component";
import { MenuComponent } from "./components/core/menu/menu.component";
import { RouterTestingModule } from "@angular/router/testing";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        MenuComponent,
        FooterComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Les Diablotins');
  }));
});
