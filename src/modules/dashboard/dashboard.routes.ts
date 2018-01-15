import { Routes } from "@angular/router";
import { DashboardComponent } from "./containers/dashboard.component";
import { ShoesCrudListComponent } from "../shoe/components/crud/shoes-crud-list.component";
import { ShoesCrudCreateUpdateComponent } from "../shoe/components/crud/shoes-crud-create-update.component";

export const DASHBOARD_ROUTES: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'shoes/add', component: ShoesCrudCreateUpdateComponent},
  {path: 'shoes/edit/:id', component: ShoesCrudCreateUpdateComponent},
  {path: 'shoes', component: ShoesCrudListComponent}
];
