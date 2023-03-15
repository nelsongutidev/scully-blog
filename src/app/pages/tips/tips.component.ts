import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map, Observable } from 'rxjs';
import { TipCardComponent } from 'src/app/shared/components/tip-card/tip-card.component';

export type Tip = {
  title: string;
  description: string;
  src: string;
  srcLarge: string;
  alt: string;
  tweetId: string;
  tags: Array<'Angular' | 'Javascript' | 'CLI'>;
};

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styles: [],
  standalone: true,
  imports: [CommonModule, TipCardComponent, RouterModule],
})
export class TipsComponent {
  scullyRouteService = inject(ScullyRoutesService);
  tips$: Observable<any[]> = this.scullyRouteService.available$.pipe(
    map((routes) => {
      return routes
        .filter(({ published, route }) => published && route.includes('/tips/'))
        .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
    })
  );
}
