import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { HeaderModule } from '../shared/components/header/header.module';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  imports: [CommonModule, ScullyLibModule, HeaderModule],
  preserveWhitespaces: true,
  standalone: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent implements OnInit {
  ngOnInit() {}
}
