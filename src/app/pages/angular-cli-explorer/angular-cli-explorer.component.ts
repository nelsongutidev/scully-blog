import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from 'src/app/shared/components/terminal/terminal.component';

@Component({
  selector: 'app-angular-cli-explorer',
  standalone: true,
  imports: [CommonModule, TerminalComponent],
  templateUrl: './angular-cli-explorer.component.html',
  styles: [],
})
export class AngularCliExplorerComponent {}
