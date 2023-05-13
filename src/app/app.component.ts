import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isMenuClosed = true;

  toggleMenu() {
    if (!this.isMenuClosed) {
      this.isMenuClosed = true;
    }
  }
}
