import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  EmployeeListComponent,
  SearchComponent,
  EmployeeViewComponent,
} from './components';
import { EmployeeService, LoggerService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SearchComponent,
    EmployeeViewComponent,
  ],
  imports: [BrowserModule],
  providers: [EmployeeService, LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
