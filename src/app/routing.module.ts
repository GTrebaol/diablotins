import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./components/contact/contact.component";
import { CollectionComponent } from "../modules/shoe/components/collection/collection.component";
import { AccueilComponent } from "./components/accueil/accueil.component";
import { ShoeComponent } from "../modules/shoe/components/shoes/shoe.component";
import { Error404Component } from "./components/core/error-404/error-404.component";
import { AdminLayoutComponent } from "./components/layout/admin-layout.component";
import { LoginGuard } from "../shared/services/login-guard.service";
import { AppLayoutComponent } from "./components/layout/app-layout.component";

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {path: '', component: AccueilComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'collection/:id', component: CollectionComponent},
      {path: 'chaussure/detail/:id', component: ShoeComponent},
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'dashboard',
        canActivateChild: [LoginGuard],
        loadChildren: '../modules/dashboard/dashboard.module#DashboardModule'
      },
      {path: 'auth', loadChildren: '../modules/auth/auth.module#AuthModule'},
      {path: '**', redirectTo: 'auth'},
    ]
  },
  {path: '404', component: Error404Component},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [LoginGuard]
})
export class RoutingModule {
}
