import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeService, LoggerService } from './services';

import { routes } from './app.routes';

import {
  EmployeeListComponent,
  SearchComponent,
  PageNotFoundComponent,
  EmployeeViewComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SearchComponent,
    PageNotFoundComponent,
    EmployeeViewComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [EmployeeService, LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
