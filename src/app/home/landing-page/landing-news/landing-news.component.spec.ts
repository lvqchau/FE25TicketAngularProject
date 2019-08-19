import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingNewsComponent } from './landing-news.component';

describe('LandingNewsComponent', () => {
  let component: LandingNewsComponent;
  let fixture: ComponentFixture<LandingNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
