import { NgModule } from '@angular/core';

import { SearchComponent } from './components';
import { ReversePipe } from './pipes';

@NgModule({
  declarations: [SearchComponent, ReversePipe],
  exports: [SearchComponent, ReversePipe],
})
export class SharedModule {}
