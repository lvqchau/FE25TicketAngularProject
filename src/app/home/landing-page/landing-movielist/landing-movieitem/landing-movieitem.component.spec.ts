import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMovieitemComponent } from './landing-movieitem.component';

describe('LandingMovieitemComponent', () => {
  let component: LandingMovieitemComponent;
  let fixture: ComponentFixture<LandingMovieitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingMovieitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingMovieitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
