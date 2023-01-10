import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialsComponent } from '../../shared/components/social/social.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, SocialsComponent, RouterModule],
})
export class HomeComponent implements OnInit {
  open = false;
  constructor() {}

  ngOnInit() {}
}
