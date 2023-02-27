import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from 'src/app/shared/components/terminal/terminal.component';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import {
  BehaviorSubject,
  combineLatest,
  distinctUntilChanged,
  map,
  Observable,
  startWith,
} from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NG_COMMANDS } from './data/angular-data';
import { FilterOptionPipe } from './data/filter-option.pipe';
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
  ],
  templateUrl: './angular-cli-explorer.component.html',
  styles: [],
})
export class AngularCliExplorerComponent {
  commandCtrl = new FormControl();
  optionCtrl = new FormControl();
  subCommandCtrl = new FormControl();
  subcommandOptionCtrl = new FormControl();
  commands = NG_COMMANDS;

  currentCommand$ = new BehaviorSubject(null);

  command$: Observable<string> = combineLatest(
    this.commandCtrl.valueChanges.pipe(startWith(null)),
    this.subCommandCtrl.valueChanges.pipe(startWith(null)),
    this.optionCtrl.valueChanges.pipe(startWith(null)),
    this.subcommandOptionCtrl.valueChanges.pipe(startWith(null))
  ).pipe(
    map(([command, subCommand, option, subcommandOption]) => {
      // console.log('command: ', command);
      // console.log('subCommand: ', subCommand);
      // console.log('option]: ', option);
      // console.log('subcommandOption: ', subcommandOption);

      if (this.currentCommand$.value !== command?.name) {
        subCommand = null;
        option = null;
        subcommandOption = null;
      }

      this.currentCommand$.next(command?.name);
      let _option = `${option?.name ? `--${option.name}` : ''}`;

      if (command?.subcommands?.length > 0) {
        _option = `${
          subcommandOption?.name ? `--${subcommandOption.name}` : ''
        }`;
      }

      return `${command?.command || ''} ${
        subCommand?.command || ''
      } ${_option}`;
    })
  );

  ngOnDestory() {
    this.currentCommand$.complete();
  }
}
