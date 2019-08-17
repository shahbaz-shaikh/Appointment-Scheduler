import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotAppointmentPresentationComponent } from './slot-appointment-presentation.component';

describe('SlotAppointmentPresentationComponent', () => {
  let component: SlotAppointmentPresentationComponent;
  let fixture: ComponentFixture<SlotAppointmentPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotAppointmentPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotAppointmentPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
