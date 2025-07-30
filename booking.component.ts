import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
})
export class BookingComponent implements OnInit {
  bookings: Booking[] = [];
  selectedBooking: Booking = this.initBooking();

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  initBooking(): Booking {
    return {
      name: '',
      email: '',
      phone: '',
      roomType: '',
      checkInDate: '',
      checkOutDate: ''
    };
  }

  loadBookings() {
    this.bookingService.getBookings().subscribe(data => {
      this.bookings = data;
    });
  }

  submitBooking(form: NgForm) {
    console.log("Form Data:", form.value);
    debugger;
    alert("Booking submitted!");

    const jsonData = JSON.stringify(form.value);
    console.log("JSON Data:", jsonData);

    if (this.selectedBooking.id) {
      this.bookingService.updateBooking({ ...form.value, id: this.selectedBooking.id }).subscribe(() => {
        alert('Booking updated!');
        this.loadBookings();
        form.resetForm();
        this.selectedBooking = this.initBooking();
      });
    } else {
      this.bookingService.addBooking(form.value).subscribe(() => {
        alert('Booking added!');
        this.loadBookings();
        form.resetForm();
      });
    }
  }

  editBooking(booking: Booking) {
    this.selectedBooking = { ...booking };
  }

  deleteBooking(id: number) {
    this.bookingService.deleteBooking(id).subscribe(() => {
      alert('Booking deleted!');
      this.loadBookings();
    });
  }
}
