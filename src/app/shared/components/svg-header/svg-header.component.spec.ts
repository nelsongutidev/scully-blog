import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgHeaderComponent } from './svg-header.component';

describe('SvgHeaderComponent', () => {
  let component: SvgHeaderComponent;
  let fixture: ComponentFixture<SvgHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
