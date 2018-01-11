import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DASHBOARD_ROUTES } from "./dashboard.routes";
import { DashboardComponent } from "./containers/dashboard.component";
import { ShoesCrudComponent } from "../shoe/components/crud/shoes-crud.component";

@NgModule({
  declarations: [
    DashboardComponent,
    ShoesCrudComponent
  ],
  imports: [
    RouterModule.forChild(DASHBOARD_ROUTES)
  ],
  providers: []
})
export class DashboardModule {
}
