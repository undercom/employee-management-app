import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { routes } from './app.routes';

import {
  EmployeeListComponent,
  SearchComponent,
  PageNotFoundComponent,
  EmployeeDetailsComponent,
  EmployeeViewComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SearchComponent,
    PageNotFoundComponent,
    EmployeeDetailsComponent,
    EmployeeViewComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
