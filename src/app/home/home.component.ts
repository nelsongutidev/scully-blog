import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  links$: Observable<ScullyRoute[]> = this.scully.available$;
  routes$: Observable<ScullyRoute[]> = this.scully.unPublished$;

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit() {}
}
