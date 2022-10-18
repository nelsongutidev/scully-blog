import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SocialIconComponent } from './social-icon/social-icon.component';
import { SocialsComponent } from './social/social.component';
import { RouterModule } from '@angular/router';
import { SvgHeaderModule } from '../svg-header/svg-header.module';

@NgModule({
  declarations: [HeaderComponent, SocialIconComponent, SocialsComponent],
  exports: [HeaderComponent, SocialIconComponent, SocialsComponent],
  imports: [CommonModule, RouterModule, SvgHeaderModule],
})
export class HeaderModule {}
