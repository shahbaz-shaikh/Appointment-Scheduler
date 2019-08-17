/**
 * @author Shahbaz Shaikh
 * @description This file consists of the Container classes that will be used for main Container of the SlotAppointmentContainerComponent.
 */

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// --------------------------------------------------- //
import { SlotAppointmentService } from '../slot-appointment.service';
import { SlotAppointment } from '../slot-appointment.model';

@Component({
  selector: 'app-slot-appointment-container',
  templateUrl: './slot-appointment-container.component.html',
  styleUrls: ['./slot-appointment-container.component.css']
})
export class SlotAppointmentContainerComponent implements OnInit {

  /** Used for the canDisable status. */
  public canDisable: boolean;
  /** Used for the canCancelled status. */
  public canCancel: boolean;
  /** slotAppointment */
  public slotAppointment$: Observable<SlotAppointment[]>;

  constructor(private slotAppointmentService: SlotAppointmentService) {
    this.canDisable = true;
    this.canCancel = false;
  }

  ngOnInit() {
    this.slotAppointment$ = this.slotAppointmentService.getSlotAppointment();
  }

  public saveSlotList(slotDetails) {
    console.log('update Slot', slotDetails);
  }
}
