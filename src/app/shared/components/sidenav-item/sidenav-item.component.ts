import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidenav-item.component.html',
  styles: [],
})
export class SidenavItemComponent {
  @Input() svgPath = '';
  @Input() secondSvgPath: undefined | string;
  @Input() routerLink = '';
  @Input() label = '';
}
