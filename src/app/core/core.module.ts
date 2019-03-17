import { NgModule, ModuleWithProviders } from '@angular/core';

import { EmployeeService, LoggerService } from './services';

@NgModule()
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [EmployeeService, LoggerService],
    };
  }
}
