import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './list.component';
import { SearchComponent } from './search.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeService } from './services/employee/employee.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SearchComponent,
    EmployeeComponent,
    PageNotFoundComponent,
    EmployeeDetailsComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
