import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DASHBOARD_ROUTES } from "./dashboard.routes";
import { DashboardComponent } from "./containers/dashboard.component";
import { ShoesCrudListComponent } from "../shoe/components/crud/shoes-crud-list.component";
import { ShoesCrudCreateUpdateComponent } from "../shoe/components/crud/shoes-crud-create-update.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    DashboardComponent,
    ShoesCrudListComponent,
    ShoesCrudCreateUpdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DASHBOARD_ROUTES)
  ],
  providers: []
})
export class DashboardModule {
}
