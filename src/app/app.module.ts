import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularLogoComponent } from './shared/components/angular-logo/angular-logo.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ScullyLibModule,
    SidenavComponent,
    AngularLogoComponent,
    FooterComponent,
    MarkdownModule.forRoot(),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
