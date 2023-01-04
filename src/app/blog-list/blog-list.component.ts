import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class BlogListComponent implements OnInit {
  scullyRouteService = inject(ScullyRoutesService);
  posts$: Observable<ScullyRoute[]> = this.scullyRouteService.available$;
  routes$: Observable<ScullyRoute[]> = this.scullyRouteService.unPublished$;

  ngOnInit(): void {}
}
