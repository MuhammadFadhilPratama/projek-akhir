import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DivisionsComponent } from './divisions/divisions.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"divisi",component:DivisionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
