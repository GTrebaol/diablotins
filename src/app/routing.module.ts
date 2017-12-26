import {NgModule} from "@angular/core";
import {UIConfig} from "./core/config/ui.config";
import {RouterModule, Routes} from "@angular/router";
import {ContactComponent} from "./contact/contact.component";
import {CollectionComponent} from "./collection/collection.component";
import {AccueilComponent} from "./accueil/accueil.component";

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'collection/:id', component: CollectionComponent},
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: '**', redirectTo: UIConfig.routes.error_404}
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
