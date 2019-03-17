import { NgModule } from '@angular/core';

import { SearchComponent } from './components';
import { ReversePipe, PadLeftPipe } from './pipes';

@NgModule({
  declarations: [SearchComponent, ReversePipe, PadLeftPipe],
  exports: [SearchComponent, ReversePipe, PadLeftPipe],
})
export class SharedModule {}
