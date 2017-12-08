import { NgModule } from '@angular/core';
import { UIConfig } from './core/config/ui.config';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
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
export class RoutingModule { }
