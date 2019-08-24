import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAddonComponent } from './home-addon.component';

describe('HomeAddonComponent', () => {
  let component: HomeAddonComponent;
  let fixture: ComponentFixture<HomeAddonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAddonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
