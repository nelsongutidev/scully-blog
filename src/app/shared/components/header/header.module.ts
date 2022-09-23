import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SocialIconComponent } from './social-icon/social-icon.component';
import { SocialsComponent } from './social/social.component';

@NgModule({
  declarations: [HeaderComponent, SocialIconComponent, SocialsComponent],
  exports: [HeaderComponent, SocialIconComponent, SocialsComponent],
  imports: [CommonModule],
})
export class HeaderModule {}
