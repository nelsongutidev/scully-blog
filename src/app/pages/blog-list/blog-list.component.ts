import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map, Observable } from 'rxjs';

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
    map((routes) =>
      routes
        .filter(({ published }) => published)
        .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))
    )
  );
}
