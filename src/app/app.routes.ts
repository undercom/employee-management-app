import { Routes } from '@angular/router';
import { EmployeeListComponent } from './list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

export const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeListComponent,
  },
  {
    path: '',
    redirectTo: '/employee',
    pathMatch: 'full',
  },
  {
    path: 'employee/:id',
    component: EmployeeDetailsComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
