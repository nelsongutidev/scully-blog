import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  imports: [CommonModule, ScullyLibModule],
  standalone: true,
})
export class BlogComponent implements OnInit {
  ngOnInit() {}
}
