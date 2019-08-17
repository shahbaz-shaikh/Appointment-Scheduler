/**
 * @author Shahbaz Shaikh
 * @description This file consists of the classes that will be used to set the configurations for the slot appointment component.
 */

/** SlotStatus
 *  Enum is used to store the slot status.
 */
export enum SlotStatus {
    Active = 0,
    Cancel = 1,
    ReOpen = 2,
    Disable = 3

}

/** SlotList
 *  Used to slot appointment information in SlotList Classs.
 */
export class SlotList {
    /** id -  Used to store the slot id. */
    id: number;
    /** status - Used to store the slot status. */
    status: SlotStatus;
    /** slotStartTime -  Used to store the slot start time. */
    slotStartTime: Date;
    /** slotEndTime - Used to store the slot end time. */
    slotEndTime: Date;
}

/** SlotName */
export class SlotName {
    /** firstHalfSlotList - Used for store the first half slot deatils. */
    firstHalfSlotList: SlotList[];
    /** secondHalfSlotList - Used for store the second half slot deatils. */
    secondHalfSlotList: SlotList[];
}

/** SlotAppointment 
 *  Used to slotAppointnet class for slot appointment deatis.
 */
export class SlotAppointment {
    /** breakStartTime - Used to store the start break time. */
    breakStartTime: Date;
    /** breakEndTime - Used to store the End break time. */
    breakEndTime: Date;
    /** slotAppointmentList -  Used to store the slot appointment list in array. */
    slotAppointmentList: SlotList[];
}