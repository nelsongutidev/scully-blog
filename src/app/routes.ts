import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AngularCliExplorerComponent } from './pages/angular-cli-explorer/angular-cli-explorer.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TipsComponent } from './pages/tips/tips.component';
import { TweetWidgetComponent } from './shared/components/tweet-widget/tweet-widget.component';

export const routes: Routes = [
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
    path: 'tips',
    component: TipsComponent,
    title: 'Tips',
  },
  {
    path: 'tips/:tweetId',
    component: TweetWidgetComponent,
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
