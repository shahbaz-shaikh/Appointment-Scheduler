import { TestBed } from '@angular/core/testing';

import { SlotAppointmentPresenterService } from './slot-appointment-presenter.service';

describe('SlotAppointmentPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlotAppointmentPresenterService = TestBed.get(SlotAppointmentPresenterService);
    expect(service).toBeTruthy();
  });
});
