import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TipsComponent } from './pages/tips/tips.component';

import { TweetWidgetComponent } from './shared/components/tweet-widget/tweet-widget.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'blog',
    component: BlogListComponent,
  },
  {
    path: 'blog/:slug',
    component: BlogComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'tips',
    component: TipsComponent,
  },
  {
    path: 'tips/:tweetId',
    component: TweetWidgetComponent,
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
