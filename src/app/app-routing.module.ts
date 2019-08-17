import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckboxWithTreeComponent } from './checkbox-with-tree/checkbox-with-tree.component';

const routes: Routes = [
  {
    path: 'checkboxTree',
    component: CheckboxWithTreeComponent
  },
  {
    path: 'slotAppointment',
    loadChildren: './slot-appointment/slot-appointment.module#SlotAppointmentModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes
    )],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
