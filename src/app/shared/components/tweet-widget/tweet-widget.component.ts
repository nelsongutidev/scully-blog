import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetWidgetService } from 'src/app/services/tweet-widget.service';

export class TweetOption {
  id?: string;
  cards?: string;
  conversation?: string;
  theme?: string;
  width?: string;
  align?: string;
  lang?: string;
  dnt?: boolean;
}

@Component({
  selector: 'app-tweet-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tweet-widget.component.html',
  styles: [],
})
export class TweetWidgetComponent {
  @Input() tweetId = '';
  options: TweetOption | object = {};
  @ViewChild('element', { static: true }) element: ElementRef | undefined;

  private attr: string = 'twElement';
  private scriptAttr: string | any = 'twttr';
  private error: boolean = false;
  constructor(
    // private element: ElementRef,
    public widgetService: TweetWidgetService
  ) {}

  async ngAfterViewInit() {
    await this.loadScript();
    this.loadWidget();
  }

  async loadWidget() {
    this.widgetService.loadElement(
      'createTweet',
      this.tweetId,
      this.element as any,
      this.options,
      (response: object) => {
        console.log('onload');
      }
    );
  }

  private async loadScript() {
    return new Promise((resolve, reject) => {
      this.widgetService
        .load(this.scriptAttr)
        .then((data) => {
          resolve(true);
          console.log('Script loaded successfully,');
        })
        .catch((err) => {
          reject();
          console.log('Script load issue,');
        });
    });
  }
}
