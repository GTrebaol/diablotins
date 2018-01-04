import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DASHBOARD_ROUTES } from "./dashboard.routes";
import { DashboardComponent } from "./containers/dashboard.component";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild(DASHBOARD_ROUTES)
  ],
  providers: []
})
export class DashboardModule {
}
