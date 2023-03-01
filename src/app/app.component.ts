import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularLogoComponent } from './shared/components/angular-logo/angular-logo.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SidenavComponent,
    AngularLogoComponent,
    FooterComponent,
    RouterModule,
  ],
})
export class AppComponent {
  isMenuClosed = true;

  toggleMenu() {
    if (!this.isMenuClosed) {
      this.isMenuClosed = true;
    }
  }
}
