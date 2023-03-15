import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tip } from 'src/app/pages/tips/tips.component';

@Component({
  selector: 'app-tip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tip-card.component.html',
  styles: [],
})
export class TipCardComponent {
  @Input() tip!: Tip;
}
