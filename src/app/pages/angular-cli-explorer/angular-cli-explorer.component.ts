import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from 'src/app/shared/components/terminal/terminal.component';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { combineLatest, map, Observable, startWith } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NG_COMMANDS } from './data/angular-data';
import { FilterOptionPipe } from './data/filter-option.pipe';
import { MarkdownModule } from 'ngx-markdown';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-angular-cli-explorer',
  standalone: true,
  imports: [
    CommonModule,
    TerminalComponent,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule,
    FilterOptionPipe,
    MarkdownModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
  ],
  templateUrl: './angular-cli-explorer.component.html',
  styles: [],
})
export class AngularCliExplorerComponent {
  @ViewChild('descriptionDialogTpl', { static: false })
  descriptionDialogTpl?: any;

  constructor(public dialog: MatDialog) {}

  commandCtrl = new FormControl();
  optionCtrl = new FormControl();
  subCommandCtrl = new FormControl();
  subcommandOptionCtrl = new FormControl();
  commandNameCtrl = new FormControl();
  commands = NG_COMMANDS;

  commandOptions$: Observable<string> = combineLatest(
    this.commandCtrl.valueChanges.pipe(startWith(null)),
    this.subCommandCtrl.valueChanges.pipe(startWith(null)),
    this.optionCtrl.valueChanges.pipe(startWith(null)),
    this.subcommandOptionCtrl.valueChanges.pipe(startWith(null)),
    this.commandNameCtrl.valueChanges.pipe(startWith(null))
  ).pipe(
    map(([command, subCommand, option, subcommandOption, commandName]) => {
      subCommand =
        subCommand?.parentCommand === command?.name ? subCommand : null;
      option = option?.parentCommand === command?.name ? option : null;
      subcommandOption =
        subcommandOption?.parentCommand === subCommand?.name
          ? subcommandOption
          : null;

      let _option = `${option?.name ? `--${option.name}` : ''}`;

      if (command?.subcommands?.length > 0) {
        _option = `${
          subcommandOption?.name ? `--${subcommandOption?.name}` : ''
        }`;
      }

      return ` ${subCommand?.command || ''} ${commandName || ''} ${_option}`;
    })
  );

  command$ = this.commandCtrl.valueChanges.pipe(
    map((command) => {
      this.commandNameCtrl.reset();
      this.subCommandCtrl.reset();
      this.optionCtrl.reset();
      this.subcommandOptionCtrl.reset();

      return command?.command || '';
    })
  );

  subCommand$ = this.subCommandCtrl.valueChanges.pipe(
    map(() => {
      this.commandNameCtrl.reset();
      this.subcommandOptionCtrl.reset();
    })
  );

  openDescriptionDialog() {
    const dialogRef = this.dialog.open(this.descriptionDialogTpl, {
      maxWidth: '80vw',
      maxHeight: '80vh',
      data: { description: this.commandCtrl.value.longDescription },
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log('The dialog was closed');
    // });
  }
}
