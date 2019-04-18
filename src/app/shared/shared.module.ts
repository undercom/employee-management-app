import { NgModule } from '@angular/core';
import { SearchComponent } from '../shared/components/search/search.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReversePipe } from './pipes/reverse.pipe';
import { AddressPipe } from './pipes/address.pipe';
import { LeftPadding } from './pipes/left-padding.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [SearchComponent, ReversePipe, AddressPipe, LeftPadding],
  exports: [
    CommonModule,
    SearchComponent,
    RouterModule,
    ReversePipe,
    AddressPipe,
    LeftPadding,
    FormsModule,
  ],
})
export class SharedModule {}
