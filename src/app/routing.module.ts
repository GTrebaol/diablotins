import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { CollectionComponent } from "./collection/collection.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { ShoeComponent } from "./shoes/shoe.component";
import { Error404Component } from "./core/error-404/error-404.component";

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'collection/:id', component: CollectionComponent },
  { path: 'chaussure/detail/:id', component: ShoeComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '404' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {
}
