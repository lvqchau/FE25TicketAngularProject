import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMovielistComponent } from './landing-movielist.component';

describe('LandingMovielistComponent', () => {
  let component: LandingMovielistComponent;
  let fixture: ComponentFixture<LandingMovielistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingMovielistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingMovielistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
