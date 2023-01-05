import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularLogoComponent } from '../angular-logo/angular-logo.component';
import { SidenavItemComponent } from '../sidenav-item/sidenav-item.component';
import { SocialsComponent } from '../social/social.component';

type NavItem = {
  label: string;
  routerLink: string;
  svgPath: string;
  secondSvgPath?: string;
};

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    AngularLogoComponent,
    SocialsComponent,
    SidenavItemComponent,
  ],
  standalone: true,
})
export class SidenavComponent implements OnInit {
  navItems: NavItem[] = [
    {
      label: 'Blog',
      routerLink: '/blog',
      svgPath:
        'M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z',
    },
    {
      label: 'Tips',
      routerLink: '/tips',
      svgPath:
        'M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z',
      secondSvgPath:
        'M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z',
    },
    {
      label: 'About',
      routerLink: '/about',
      svgPath:
        'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
    },
  ];

  @Output() navItemClicked: EventEmitter<void> = new EventEmitter();
  ngOnInit(): void {}
}
