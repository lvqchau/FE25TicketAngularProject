import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAdComponent } from './landing-ad.component';

describe('LandingAdComponent', () => {
  let component: LandingAdComponent;
  let fixture: ComponentFixture<LandingAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
