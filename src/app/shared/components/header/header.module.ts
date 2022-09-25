import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SocialIconComponent } from './social-icon/social-icon.component';
import { SocialsComponent } from './social/social.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SocialIconComponent, SocialsComponent],
  exports: [HeaderComponent, SocialIconComponent, SocialsComponent],
  imports: [CommonModule, RouterModule],
})
export class HeaderModule {}
