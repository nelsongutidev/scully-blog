import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { Tweet, TWEETS } from '../../constants/tweets';
@Component({
  selector: 'app-tweet-widget',
  standalone: true,
  imports: [CommonModule],
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
