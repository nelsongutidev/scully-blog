import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgSitenameAnimationComponent } from '../svg-sitename-animation/svg-sitename-animation.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SvgSitenameAnimationComponent],
  templateUrl: './footer.component.html',
  styles: [],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
