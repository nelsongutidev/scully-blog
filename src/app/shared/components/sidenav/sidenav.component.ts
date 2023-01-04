import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularLogoComponent } from '../angular-logo/angular-logo.component';
import { SocialsComponent } from '../social/social.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  imports: [CommonModule, RouterModule, AngularLogoComponent, SocialsComponent],
  standalone: true,
})
export class SidenavComponent implements OnInit {
  ngOnInit(): void {}
}
