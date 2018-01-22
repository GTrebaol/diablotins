import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { RoutingModule } from "./routing.module";
import { CoreModule } from "./components/core/core.module";
import { ContactComponent } from "./components/contact/contact.component";
import { CollectionComponent } from "../modules/shoe/components/collection/collection.component";
import { AccueilComponent } from "./components/accueil/accueil.component";
import { ShoeService } from "../shared/services/shoe.service";
import { HttpClientModule } from "@angular/common/http";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CollectionCardComponent } from "../modules/shoe/components/collection-card/collection-card.component";
import { ShoeComponent } from "../modules/shoe/components/shoes/shoe.component";
import { NguiMapModule } from "@ngui/map";
import { AdminLayoutComponent } from "./components/layout/admin-layout.component";
import { AuthService } from "../shared/services/auth.service";
import { LoginGuard } from "../shared/services/login-guard.service";
import { AppLayoutComponent } from "./components/layout/app-layout.component";
import { ToastrModule } from "ngx-toastr";
import { PagerService } from "../shared/services/pager.service";
import { ConfirmationDialog } from "./components/core/confirmation-dialog/confirmation-dialog.component";
import { MaterialModule } from "./material.module";
import { TokenInterceptor } from "../shared/interceptors/token.interceptor";
import { TokenService } from "../shared/services/token.service";

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AppLayoutComponent,
    AppComponent,
    CollectionComponent,
    ContactComponent,
    ConfirmationDialog,
    AccueilComponent,
    CollectionCardComponent,
    ShoeComponent,
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ToastrModule.forRoot(),
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCKlofF026tdVNnJI4Y1BJKqmiI5LHXO7I'})
  ],
  entryComponents: [ConfirmationDialog],
  providers: [AuthService, TokenService, ShoeService, LoginGuard, PagerService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
