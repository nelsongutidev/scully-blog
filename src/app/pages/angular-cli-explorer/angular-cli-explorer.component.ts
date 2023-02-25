import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from 'src/app/shared/components/terminal/terminal.component';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Command, COMMAND, SUB_COMMAND, OPTIONS } from './data/data';
import {
  combineLatest,
  map,
  Observable,
  ReplaySubject,
  startWith,
  takeUntil,
  tap,
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
  commands = NG_COMMANDS;

  command$: Observable<string> = combineLatest(
    this.commandCtrl.valueChanges.pipe(startWith(null)),
    this.subCommandCtrl.valueChanges.pipe(startWith(null)),
    this.optionCtrl.valueChanges.pipe(startWith(null))
  ).pipe(
    map(([command, subCommand, option]) => {
      console.log('command: ', command);
      console.log('subCommand: ', subCommand);
      console.log('option: ', option);

      return `${command?.command || ''} ${subCommand?.command || ''} ${
        option?.name ? `--${option.name}` : ''
      }`;
    })
  );

  ngOnInit() {}
}
