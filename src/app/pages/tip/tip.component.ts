import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tip',
  standalone: true,
  imports: [CommonModule, ScullyLibModule, RouterModule],
  templateUrl: './tip.component.html',
  styles: [],
})
export class TipComponent {}
