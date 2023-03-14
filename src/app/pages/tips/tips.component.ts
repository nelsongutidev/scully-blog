import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map, Observable } from 'rxjs';
import { TweetCardComponent } from 'src/app/shared/components/tweet-card/tweet-card.component';
import { TweetWidgetComponent } from 'src/app/shared/components/tweet-widget/tweet-widget.component';
import { Tweet, TWEETS } from 'src/app/shared/constants/tweets';
@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styles: [],
  standalone: true,
  imports: [
    CommonModule,
    TweetWidgetComponent,
    TweetCardComponent,
    RouterModule,
  ],
})
export class TipsComponent {
  tweets: Tweet[] = TWEETS;
  scullyRouteService = inject(ScullyRoutesService);
  tips$: Observable<any[]> = this.scullyRouteService.available$.pipe(
    map((routes) => {
      return routes
        .filter(({ published, route }) => published && route.includes('/tips/'))
        .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
    })
  );
}
