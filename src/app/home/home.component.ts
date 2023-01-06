import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SocialsComponent } from '../shared/components/social/social.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, HeaderComponent, SocialsComponent, RouterModule],
})
export class HomeComponent implements OnInit {
  open = false;
  constructor() {}

  ngOnInit() {}
}
