import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking.model';
import { BookedRoom } from 'src/app/models/bookedRoom.model';
import { CheckinService } from 'src/app/services/checkin.service';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {
  bookingId = '';
  booking: Booking = new Booking();

  customer?: Customer;
  rented = false;

  rooms: BookedRoom[] = [];
  selectedRooms : string[] = [];

  error = false;
  errorMsg?: string;

  constructor(
    private checkinService: CheckinService,
  )
  {  }

  ngOnInit(): void {
  }

  findBooking(): void {
    this.rented = false;
    this.checkinService.get(this.bookingId)
      .subscribe(
        (data : Booking) => {
          if (data == null) {
            this.error = true;
            this.errorMsg = 'Cannot find this booking';
            return;
          }
          if (data.state != 'Booking') {
            this.error = true;
            this.errorMsg = `This booking is in ${data.state} state`;
            return;
          }
          this.booking = data;
          if (data.customer) {
            this.customer = data.customer;
          }
          this.rooms = data.bookedRooms;
          this.selectedRooms = this.rooms.map(r=>r.roomId.roomNumber);
          this.error = false;
        },
        error => {
          this.error = true;
          this.errorMsg = error.error.Exception;
        });
  }

  rent(): void {
    this.booking.bookedRooms = this.booking.bookedRooms.filter(
      r=>this.selectedRooms.includes(r.roomId.roomNumber)
    );
    this.booking.cost = 0;
    for (let room of this.booking.bookedRooms) {
      this.booking.cost += room.price;
    }
    this.booking.timeStamp = new Date().toISOString();
    this.checkinService.book(this.booking)
      .subscribe(
        (data : Booking) => {
          this.booking = data;
          this.error = false;
          this.rented = true;
        },
        error => {
          this.error = true;
          this.errorMsg = error.error.Exception;
        });
  }

  onRoomChange(): void {
    let bookedRooms = this.booking.bookedRooms.filter(
      r=>this.selectedRooms.includes(r.roomId.roomNumber)
    );
    this.booking.cost = 0;
    for (let room of bookedRooms) {
      this.booking.cost += room.price;
    }
  }
}
