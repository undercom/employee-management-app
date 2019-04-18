import { NgModule } from '@angular/core';
import { SearchComponent } from '../shared/components/search/search.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SearchComponent, ReversePipe],
  exports: [CommonModule, SearchComponent, RouterModule, ReversePipe],
})
export class SharedModule {}
