import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class BookingService {
  private apiUrl = 'http://localhost:3000/bookings';

  constructor(private http: HttpClient) {}

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.apiUrl);
  }

  addBooking(data: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.apiUrl, data);
  }

  updateBooking(data: Booking): Observable<Booking> {
    return this.http.put<Booking>(`${this.apiUrl}/${data.id}`, data);
  }

  deleteBooking(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
