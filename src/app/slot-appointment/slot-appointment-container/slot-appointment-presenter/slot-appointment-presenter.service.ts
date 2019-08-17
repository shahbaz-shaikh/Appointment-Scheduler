/**
 * @author Shahbaz Shaikk
 * @description This file consists of the presenter classes that will be used for the slot appointment presenter.
 */

import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
// ------------------------------------------------------------- //
import { SlotAppointment, SlotList, SlotName } from '../../slot-appointment.model';

@Injectable()
export class SlotAppointmentPresenterService {

  /** Public Variables */
  public slotAppointmentList$: Observable<SlotList[]>;

  /** Private Variables */
  private slotAppointmentList: Subject<SlotList[]>;

  constructor() {
    this.slotAppointmentList = new Subject<SlotList[]>();
    this.slotAppointmentList$ = this.slotAppointmentList.asObservable();
  }

  public getFirstAndSecondHalfSlotList(slotAppointmentDetail: SlotAppointment): SlotName {
    let firstHalfSlotList: SlotList[] = [];
    let secondHalfSlotList: SlotList[] = [];
    let slotAppointment: SlotName;

    slotAppointmentDetail.slotAppointmentList.forEach((slotLists: SlotList) => {
      if (slotLists.slotEndTime <= slotAppointmentDetail.breakStartTime) {
        firstHalfSlotList.push(slotLists);
      } else if (slotLists.slotStartTime >= slotAppointmentDetail.breakEndTime) {
        secondHalfSlotList.push(slotLists);
      }
    });
    return slotAppointment = {
      firstHalfSlotList: firstHalfSlotList,
      secondHalfSlotList: secondHalfSlotList
    };
  }

  public disableSlots(index: number, slot: SlotList, secondHalfSlotList: SlotList[]): SlotList[] {
    secondHalfSlotList.forEach((slotList) => {
      const slotIndex = secondHalfSlotList.indexOf(slotList);
      if (index <= slotIndex) {
        if (index === slotIndex && slot.status === 3) {
          slot.status = 0;
        } else {
          slotList.status = 3;
        }
      } else {
        slotList.status = 0;
      }
    });
    return secondHalfSlotList;
  }

  // 
  public cancelSlot(slot: SlotList): void {
    if (slot.status !== 3) {
      if (slot.status !== 1 && slot.status !== 3) {
        slot.status = 1;
      } else {
        slot.status = 0;
      }
    }
  }

  public mergeSlots(firstHalfSlotList: SlotList[], secondHalfSlotList: SlotList[]): void {
    let slotAppointment: SlotList[] = [...firstHalfSlotList, ...secondHalfSlotList];
    this.slotAppointmentList.next(slotAppointment);
  }

}
