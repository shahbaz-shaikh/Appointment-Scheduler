/**
 * @author - Shahbaz Shaikh
 * @description - This routing file are set the all child routes for Slot appointment.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// -------------------------------------------------------------------------- //
import { SlotAppointmentContainerComponent } from './slot-appointment-container/slot-appointment-container.component';

/**
 * This route of child Routes.
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: 'slotAppointmentContainer',
    pathMatch: 'full',
  },
  {
    path: 'slotAppointmentContainer',
    component: SlotAppointmentContainerComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SlotAppointmentRoutingModule { }
