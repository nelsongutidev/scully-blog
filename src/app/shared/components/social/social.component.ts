import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  Social,
  SocialIconComponent,
} from '../social-icon/social-icon.component';

@Component({
  selector: 'app-socials',
  template: `
    <app-social-icon
      *ngFor="let social of socials"
      [socialId]="social.id"
      [link]="social.link"
    ></app-social-icon>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    // class: 'w-full grid grid-cols-3 gap-2 mb-4 justify-items-center',
    class: 'w-full flex justify-center gap-4 mb-4 ',
  },
  standalone: true,
  imports: [CommonModule, SocialIconComponent],
})
export class SocialsComponent {
  socials = [
    { id: 'Github' as Social, link: 'https://github.com/nelsongutidev' },
    {
      id: 'LinkedIn' as Social,
      link: 'https://www.linkedin.com/in/nelsongutidev/',
    },
    { id: 'Twitter' as Social, link: 'https://twitter.com/nelsongutidev' },
    // { id: 'Youtube' as Social, link: 'https://youtube.com' },
  ];
}
