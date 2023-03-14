import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class BlogListComponent {
  scullyRouteService = inject(ScullyRoutesService);
  posts$: Observable<ScullyRoute[]> = this.scullyRouteService.available$.pipe(
    map((routes) => {
      return routes
        .filter(({ published, route }) => published && route.includes('/blog/'))
        .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
    })
  );
}
