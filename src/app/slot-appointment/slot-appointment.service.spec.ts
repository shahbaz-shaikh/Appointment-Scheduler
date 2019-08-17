import { TestBed } from '@angular/core/testing';

import { SlotAppointmentService } from './slot-appointment.service';

describe('SlotAppointmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlotAppointmentService = TestBed.get(SlotAppointmentService);
    expect(service).toBeTruthy();
  });
});
