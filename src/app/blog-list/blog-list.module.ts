import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlogListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BlogListComponent }]),
  ],
  exports: [BlogListComponent],
})
export class BlogListModule {}
