import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SvgHeaderComponent } from '../svg-header/svg-header.component';
import { SocialsComponent } from '../social/social.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, SocialsComponent, SvgHeaderComponent],
})
export class HeaderComponent implements OnInit {
  @Input() fullHeader = true;
  title = '< ng />';

  constructor() {}

  ngOnInit(): void {}
}
