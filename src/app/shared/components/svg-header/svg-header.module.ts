import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgHeaderComponent } from './svg-header.component';

@NgModule({
  declarations: [SvgHeaderComponent],
  exports: [SvgHeaderComponent],
  imports: [CommonModule],
})
export class SvgHeaderModule {}
