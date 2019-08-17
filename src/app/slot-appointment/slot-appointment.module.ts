/**
 * @author Shahbaz Shaikh
 * @class SlotAppointmentModule
 * @description The root module of Slot-Appointment.
 */


import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
// -------------------------------------------------------------------------------- //
import { SlotAppointmentRoutingModule } from './slot-appointment-routing.module';
import { SlotAppointmentContainerComponent } from './slot-appointment-container/slot-appointment-container.component';
import { SlotAppointmentPresentationComponent } from './slot-appointment-container/slot-appointment-presentation/slot-appointment-presentation.component';
import { SlotAppointmentService } from './slot-appointment.service';
import { SlotTimePipe } from './pipe/slot-time.pipe';

@NgModule({
  declarations: [
    SlotAppointmentContainerComponent,
    SlotAppointmentPresentationComponent,
    SlotTimePipe
  ],
  imports: [
    CommonModule,
    SlotAppointmentRoutingModule
  ],
  providers: [
    SlotAppointmentService,
    DatePipe
  ]
})
export class SlotAppointmentModule { }
