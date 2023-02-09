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
  ],
  templateUrl: './angular-cli-explorer.component.html',
  styles: [],
})
export class AngularCliExplorerComponent {
  primaryOption = new FormControl();
  secondaryOption = new FormControl();
  tertiaryOption = new FormControl();

  primaryOptions = COMMAND;
  secondaryOptions = SUB_COMMAND;
  tertiaryOptions = OPTIONS;

  primaryOption$: Observable<Command | undefined> =
    this.primaryOption.valueChanges.pipe(
      map((value: string) =>
        COMMAND.find((option: Command) => option.value === value)
      )
    );

  command$: Observable<string> = combineLatest(
    this.primaryOption.valueChanges.pipe(startWith(null)),
    this.secondaryOption.valueChanges.pipe(startWith(null)),
    this.tertiaryOption.valueChanges.pipe(startWith(null))
  ).pipe(
    map(([primaryOption, secondaryOption, tertiaryOption]) => {
      const optionSelected =
        tertiaryOption && primaryOption.value === tertiaryOption.command
          ? tertiaryOption.value
          : '';

      if (primaryOption?.command) {
        return optionSelected
          ? primaryOption.command + ' ' + optionSelected
          : primaryOption.command;
      }

      return secondaryOption?.command;
    })
  );

  ngOnInit() {}
}
