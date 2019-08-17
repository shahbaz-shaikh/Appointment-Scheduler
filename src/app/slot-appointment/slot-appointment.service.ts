/**
 * @author - Shahbaz Shaikh
 * @description - This service file are communication between component to server.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// ---------------------------------------------------------- //
import { SlotAppointment, SlotList } from './slot-appointment.model';

@Injectable({
  providedIn: 'root'
})

export class SlotAppointmentService {

  /** serviceUrl - Used to store the server URL. */
  private serviceUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  /**
   * Gets all the slot appointment from server usig get method of http client
   * @returns all the slot appointment data observable
   */
  public getSlotAppointment(): Observable<SlotAppointment[]> {
    return this.httpClient.get<SlotAppointment[]>(this.serviceUrl + 'slotAppoinmentDetails');
  }

}
