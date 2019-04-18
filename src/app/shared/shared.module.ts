import { NgModule } from '@angular/core';
import { SearchComponent } from '../shared/components/search/search.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReversePipe } from './pipes/reverse.pipe';
import { AddressPipe } from './pipes/address.pipe';
import { LeftPadding } from './pipes/left-padding.pipe';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SearchComponent, ReversePipe, AddressPipe, LeftPadding],
  exports: [
    CommonModule,
    SearchComponent,
    RouterModule,
    ReversePipe,
    AddressPipe,
    LeftPadding,
  ],
})
export class SharedModule {}
