import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotAppointmentContainerComponent } from './slot-appointment-container.component';

describe('SlotAppointmentContainerComponent', () => {
  let component: SlotAppointmentContainerComponent;
  let fixture: ComponentFixture<SlotAppointmentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotAppointmentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotAppointmentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
