import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app/app.component';
import { routes } from './app/routes';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      MarkdownModule.forRoot(),
      ScullyLibModule
    ),
    HttpClientModule,
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
