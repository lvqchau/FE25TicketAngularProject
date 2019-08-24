import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaBranchComponent } from './cinema-branch.component';

describe('CinemaBranchComponent', () => {
  let component: CinemaBranchComponent;
  let fixture: ComponentFixture<CinemaBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
