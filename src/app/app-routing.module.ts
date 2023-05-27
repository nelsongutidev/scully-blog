import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AngularCliExplorerComponent } from './pages/angular-cli-explorer/angular-cli-explorer.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TipComponent } from './pages/tip/tip.component';
import { TipsComponent } from './pages/tips/tips.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Nelson Gutiérrez',
  },
  {
    path: 'blog',
    component: BlogListComponent,
    title: 'Blog',
  },
  {
    path: 'blog/:slug',
    component: BlogComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },
  {
    path: 'tips/es',
    component: TipsComponent,
  },
  {
    path: 'tips/es/:id',
    component: TipComponent,
  },
  {
    path: 'tips',
    component: TipsComponent,
    title: 'Tips',
  },
  {
    path: 'tips/1630618252693979165',
    redirectTo: '/tips/ng-update',
    pathMatch: 'full',
  },
  {
    path: 'tips/1625586017334878238',
    redirectTo: '/tips/title-case-pipe',
    pathMatch: 'full',
  },
  {
    path: 'tips/:id',
    component: TipComponent,
  },
  {
    path: 'angular-cli-explorer',
    component: AngularCliExplorerComponent,
    title: 'Angular CLI Explorer',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
