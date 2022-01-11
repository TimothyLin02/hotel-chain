import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking.model';
import { BookedRoom } from 'src/app/models/bookedRoom.model';
import { CheckoutService } from 'src/app/services/checkout.service';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  bookingId = '';
  booking: Booking = new Booking();

  customer?: Customer;
  rented = false;

  rooms: BookedRoom[] = [];
  selectedRooms : string[] = [];

  error = false;
  errorMsg?: string;

  constructor(
    private checkoutService: CheckoutService,
  )
  {  }

  ngOnInit(): void {
  }

  findBooking(): void {
    this.rented = false;
    this.checkoutService.get(this.bookingId)
      .subscribe(
        (data : Booking) => {
          if (data == null) {
            this.error = true;
            this.errorMsg = 'Cannot find this booking';
            return;
          }
          if (data.state != 'Renting') {
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

  pay(): void {
    this.booking.bookedRooms = this.booking.bookedRooms.filter(
      r=>this.selectedRooms.includes(r.roomId.roomNumber)
    );
    this.booking.cost = 0;
    for (let room of this.booking.bookedRooms) {
      this.booking.cost += room.price;
    }
    this.booking.timeStamp = new Date().toISOString();
    this.checkoutService.pay(this.booking)
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
}
