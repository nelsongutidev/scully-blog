import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isMenuClosed = true;

  toggleMenu() {
    if (!this.isMenuClosed) {
      this.isMenuClosed = true;
    }
  }
}
