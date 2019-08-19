import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTicketboxComponent } from './movie-ticketbox.component';

describe('MovieTicketboxComponent', () => {
  let component: MovieTicketboxComponent;
  let fixture: ComponentFixture<MovieTicketboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTicketboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTicketboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
