import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from 'src/app/shared/components/terminal/terminal.component';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PRIMARY_OPTIONS, SECONDARY_OPTIONS } from './data/data';
import { combineLatest, map, Observable, ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-angular-cli-explorer',
  standalone: true,
  imports: [
    CommonModule,
    TerminalComponent,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './angular-cli-explorer.component.html',
  styles: [],
})
export class AngularCliExplorerComponent {
  primaryOption = new FormControl();
  secondaryOption = new FormControl();

  primaryOptions = PRIMARY_OPTIONS;
  secondaryOptions = SECONDARY_OPTIONS;

  command$: Observable<string> = this.secondaryOption.valueChanges.pipe(
    map((value) => value.command)
  );

  ngOnInit() {
    console.log('init');
  }
}
