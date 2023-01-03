import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularLogoComponent } from './shared/components/angular-logo/angular-logo.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    SidenavComponent,
    AngularLogoComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
