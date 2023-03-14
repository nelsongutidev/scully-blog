import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, RouterModule } from '@angular/router';
import { Tweet, TWEETS } from '../../constants/tweets';
import { ScullyLibModule } from '@scullyio/ng-lib';

@Component({
  selector: 'app-tweet-widget',
  standalone: true,
  imports: [CommonModule, RouterModule, ScullyLibModule],
  templateUrl: './tweet-widget.component.html',
  styles: [],
})
export class TweetWidgetComponent {
  tweet!: Tweet | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.setCurrentTweet();
  }

  setCurrentTweet() {
    const currentTweetId = this.route.snapshot.paramMap.get('tweetId') || '';
    this.tweet = TWEETS.find(({ tweetId }) => tweetId === currentTweetId);
  }
}
