import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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
  posts$: Observable<ScullyRoute[]> = this.scully.available$;
  routes$: Observable<ScullyRoute[]> = this.scully.unPublished$;

  constructor(private scully: ScullyRoutesService) {}
  ngOnInit(): void {}
}
