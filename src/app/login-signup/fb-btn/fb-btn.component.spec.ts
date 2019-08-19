import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbBtnComponent } from './fb-btn.component';

describe('FbBtnComponent', () => {
  let component: FbBtnComponent;
  let fixture: ComponentFixture<FbBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
