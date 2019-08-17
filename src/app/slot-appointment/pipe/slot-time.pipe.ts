import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'shortTimeSlot'
})
export class SlotTimePipe implements PipeTransform {

  constructor(private dateTimePipe: DatePipe) { }

  transform(slotTime: string): any {

    const shortSlotTime = new Date(slotTime);

    /**
     * Start Slot Time
     */
    const shortTimeFormat = this.dateTimePipe.transform(shortSlotTime, 'HH:mm')


    return shortTimeFormat;
  }

}
