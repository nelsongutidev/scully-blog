import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./blog-list/blog-list.component').then(
        (m) => m.BlogListComponent
      ),
  },
  {
    path: 'blog/:slug',
    loadComponent: () =>
      import('./blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
