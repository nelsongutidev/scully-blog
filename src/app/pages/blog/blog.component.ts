import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  imports: [CommonModule, ScullyLibModule, RouterModule],
  standalone: true,
})
export class BlogComponent implements OnInit {
  ngOnInit() {}
}
