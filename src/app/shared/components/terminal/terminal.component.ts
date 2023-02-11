import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule],
  templateUrl: './terminal.component.html',
  styles: [],
})
export class TerminalComponent {
  constructor(private clipboard: Clipboard, private snackBar: MatSnackBar) {}
  @ViewChild('snackBarTpl') snackBarTpl: TemplateRef<any> | undefined;

  @Input() command = '';

  copyToClipboard() {
    this.clipboard.copy(this.command);
    this.openSnackBar();
  }

  openSnackBar() {
    this.snackBar.openFromTemplate(this.snackBarTpl!, {
      horizontalPosition: 'right',
      duration: 3000,
    });
  }
}
