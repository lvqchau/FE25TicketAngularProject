import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchMovieComponent } from './branch-movie.component';

describe('BranchMovieComponent', () => {
  let component: BranchMovieComponent;
  let fixture: ComponentFixture<BranchMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
