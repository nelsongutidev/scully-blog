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
    map((routes) => routes.filter(({ published }) => published))
  );
}
