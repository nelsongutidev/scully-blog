import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlogListComponent],
  imports: [CommonModule, RouterModule],
  exports: [BlogListComponent],
})
export class BlogListModule {}
