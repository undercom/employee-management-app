import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/components/employee-list/employee-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeeDetailsComponent } from './employee/components/employee-details/employee-details.component';
import { EmployeeNewComponent } from './employee/components/employee-new/employee-new.component';

export const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeListComponent,
  },
  {
    path: 'employee/new',
    component: EmployeeNewComponent,
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
