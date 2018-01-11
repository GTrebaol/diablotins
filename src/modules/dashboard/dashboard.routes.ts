import { Routes } from "@angular/router";
import { DashboardComponent } from "./containers/dashboard.component";
import { ShoesCrudComponent } from "../shoe/components/crud/shoes-crud.component";

export const DASHBOARD_ROUTES: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'shoes', component: ShoesCrudComponent}
];
