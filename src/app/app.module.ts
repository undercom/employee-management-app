import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/components/employee-list/employee-list.component';
import { SearchComponent } from './shared/components/search/search.component';
import { EmployeeComponent } from './employee/components/employee/employee.component';
import { EmployeeService } from './services/employee/employee.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { EmployeeDetailsComponent } from './employee/components/employee-details/employee-details.component';
import { SharedModule } from './shared/shared.module';
import { EmployeeModule } from './employee/employee.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule,
    EmployeeModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
