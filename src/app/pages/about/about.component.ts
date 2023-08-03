import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true,
  imports: [NgOptimizedImage],
})
export class AboutComponent implements OnInit {
  yearsOfExperience = new Date().getFullYear() - 2017;
  initials = '<ng />';
  constructor() {}

  ngOnInit(): void {}
}
