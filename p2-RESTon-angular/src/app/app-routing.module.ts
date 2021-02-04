import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeGuard } from './guards/employee.guard';
import { ManagerGuard } from './guards/manager.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule),
    // canActivate: [IsLoggedInGuard]
  },
  {
    path: 'employee',
    loadChildren: () => import('./modules/employee-dashboard/employee-dashboard.module').then(m => m.EmployeeDashboardModule),
    canActivate: [EmployeeGuard],
  },
  {
    path: 'manager',
    loadChildren: () => import('./modules/manager-dashboard/manager-dashboard.module').then(m => m.ManagerDashboardModule),
    canActivate: [ManagerGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
