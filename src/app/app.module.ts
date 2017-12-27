import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { RoutingModule } from "./routing.module";
import { CoreModule } from "./core/core.module";
import { ContactComponent } from "./contact/contact.component";
import { CollectionComponent } from "./collection/collection.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { ShoeService } from "./shoes/shoe.service";
import { HttpClientModule } from "@angular/common/http";
import { CollectionCardComponent } from "./components/collection-card/collection-card.component";
import { ShoeComponent } from "./shoes/shoe.component";

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CollectionComponent,
    AccueilComponent,
    CollectionCardComponent,
    ShoeComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ShoeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
