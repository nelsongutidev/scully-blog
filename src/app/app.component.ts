import { Component, inject } from '@angular/core';
// import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isMenuClosed = true;
  title = 'blog';
}
