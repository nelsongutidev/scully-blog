import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from 'src/app/shared/components/terminal/terminal.component';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PrimaryOption, PRIMARY_OPTIONS, SECONDARY_OPTIONS } from './data/data';
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

  primaryOptions = PRIMARY_OPTIONS;
  secondaryOptions = SECONDARY_OPTIONS;

  primaryOption$: Observable<PrimaryOption | undefined> =
    this.primaryOption.valueChanges.pipe(
      map((value: string) =>
        PRIMARY_OPTIONS.find((option: PrimaryOption) => option.value === value)
      )
    );

  command$: Observable<string> = combineLatest(
    this.primaryOption.valueChanges.pipe(startWith(null)),
    this.secondaryOption.valueChanges.pipe(startWith(null))
  ).pipe(
    map(([primaryOption, secondaryOption]) => {
      console.log('primary: ', primaryOption);
      console.log('secondaryOption: ', secondaryOption);
      if (primaryOption?.command) {
        return primaryOption.command;
      }

      return secondaryOption?.command || '';
    })
  );

  ngOnInit() {
    console.log('init');
  }
}
