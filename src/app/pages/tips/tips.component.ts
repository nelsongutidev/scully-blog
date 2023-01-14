import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
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
}
