import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeService } from './services/employee/employee.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeNewComponent } from './employee/components/employee-new/employee-new.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, EmployeeNewComponent],
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
