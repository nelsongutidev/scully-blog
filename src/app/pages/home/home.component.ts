import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialsComponent } from '../../shared/components/social/social.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, SocialsComponent, RouterModule, NgOptimizedImage],
})
export class HomeComponent implements OnInit {
  ngOnInit() {}
}
