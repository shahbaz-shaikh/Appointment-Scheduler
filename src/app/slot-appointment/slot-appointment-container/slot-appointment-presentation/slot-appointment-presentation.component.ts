/**
 * @author Shahbaz Shaikh
 * @description This file consists of the Presentation classes that will be used for the SlotAppointmentPresentationComponent.
 */

import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
// ------------------------------------------------------------------------- //
import { SlotAppointment, SlotName, SlotList } from '../../slot-appointment.model';
import { SlotAppointmentPresenterService } from '../slot-appointment-presenter/slot-appointment-presenter.service';

@Component({
  selector: 'roc-appointment-slot',
  templateUrl: './slot-appointment-presentation.component.html',
  styleUrls: ['./slot-appointment-presentation.component.css'],
  viewProviders: [SlotAppointmentPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SlotAppointmentPresentationComponent implements OnInit, OnDestroy {

  /** Get the input of canDisable from Container component*/
  @Input() set canDisable(canDisable: boolean) {
    if (canDisable) {
      this._canDisable = canDisable;
      this.checkConfiguration();
    }
  }

  get canDisable(): boolean {
    return this._canDisable;
  }

  /** Get the input of canCancelled from Container component*/
  @Input() set canCancel(canCancel: boolean) {
    if (canCancel) {
      this._canCancel = canCancel;
      this.checkConfiguration();
    }
  }

  get canCancel(): boolean {
    return this._canCancel;
  }

  /** slotAppointmentDetail - Used for Get and Set data from Container component */
  @Input() set slotAppointmentDetail(slotAppointmentDetail: SlotAppointment) {
    if (slotAppointmentDetail) {
      this._slotAppointmentDetail = slotAppointmentDetail;
      this.setFirstAndSecondHalfSlotList(this._slotAppointmentDetail);
    }
  }

  get slotAppointmentDetail(): SlotAppointment {
    return this._slotAppointmentDetail;
  }

  /** totalSlot - Event emitter that emit the slot appointment lists. */
  @Output() slotDetails: EventEmitter<SlotList[]>;

  /** Public Variables */
  /** Store the firstHalfSlotList list. */
  public firstHalfSlotList: SlotList[];
  /** Store the secondHalfSlotList list. */
  public secondHalfSlotList: SlotList[];
  public checkVisibility: boolean;

  /** Private Variables */
  /** slotAppointmentDetail are store the value of slot appointment. */
  private _canDisable: boolean;
  private _canCancel: boolean;
  private _slotAppointmentDetail: SlotAppointment;
  /** Used for destroy subject. */
  private destroy: Subject<void>;

  constructor(private slotAppointmentPresenter: SlotAppointmentPresenterService) {
    this.checkVisibility = false;
    this.destroy = new Subject();
    this.slotDetails = new EventEmitter<SlotList[]>();
  }

  /** Called once, after the first ngOnChanges(). */
  ngOnInit() {
    this.slotAppointmentPresenter.slotAppointmentList$.pipe(takeUntil(this.destroy)).subscribe((response: SlotList[]) => {
      this.slotDetails.emit(response);
    });
  }

  public setSlotAppointment(index: number, slot: SlotList) {
    if (this.canDisable && this.canCancel) {
      this.checkConfiguration();
    } else if (this.canDisable) {
      this.setDisableSlot(index, slot);
    } else if (this.canCancel) {
      this.setCancelSlot(slot);
    } else {
      console.error('Slot are view mode only.');
    }
  }

  public setDisableSlot(index: number, slot: SlotList) {
    this.secondHalfSlotList = this.slotAppointmentPresenter.disableSlots(index, slot, this.secondHalfSlotList);
    this.slotAppointmentPresenter.mergeSlots(this.firstHalfSlotList, this.secondHalfSlotList);
  }

  public setCancelSlot(slot: SlotList) {
    if (this.canDisable && this.canCancel) {
      this.checkConfiguration();
    } else if (this.canCancel) {
      this.slotAppointmentPresenter.cancelSlot(slot);
      this.slotAppointmentPresenter.mergeSlots(this.firstHalfSlotList, this.secondHalfSlotList);
    }
  }

  private checkConfiguration() {
    if (this.canDisable && this.canCancel) {
      this.checkVisibility = true;
      console.error('You can choose only one functionality at a time either canDisable or canCancelled...!!!');
    }
  }

  private setFirstAndSecondHalfSlotList(slotAppointmentDetail: SlotAppointment): void {
    let slotName: SlotName = this.slotAppointmentPresenter.getFirstAndSecondHalfSlotList(slotAppointmentDetail);
    this.firstHalfSlotList = slotName.firstHalfSlotList;
    this.secondHalfSlotList = slotName.secondHalfSlotList;
  }

  public ngOnDestroy(): void {
    this.destroy.next();
  }

}