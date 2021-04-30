import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { Hotel } from 'src/app/models/hotel.model';
import { Booking } from 'src/app/models/booking.model';
import { BookedRoom } from 'src/app/models/bookedRoom.model';
import { RoomService } from 'src/app/services/room.service';
import { BookingService } from 'src/app/services/booking.service';

/**
 * @title Configurable checkbox
 */
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent {
  hotel = new Hotel();

  customers : Customer[] = [];
  selectedCustID: string = "";

  customer = new Customer();
  booking = new Booking();

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  rooms: BookedRoom[] = [];
  selectedRooms : string[] = [];

  error = false;
  errorMsg?: string;

  constructor(
    private roomService: RoomService,
    private bookingService: BookingService,
    private customerService: CustomerService
  )
  {
  }

  ngOnInit(): void {
    this.hotel = Object.assign(new Hotel(), history.state);
    this.retrieveCustomers();
    this.prepareBooking();
  }

  retrieveCustomers(): void {
    this.customerService.getAll()
      .subscribe(
        (data : Customer[]) => {
          this.customers = data;
          this.error = false;
        },
        error => {
          this.error = true;
          this.errorMsg = error.error.Exception;
        });
  }

  prepareBooking(): void {
    this.bookingService.prepare(this.hotel.hotelId)
      .subscribe(
        (data : Booking) => {
          this.booking = data;
          this.rooms = data.bookedRooms;
          this.error = false;
        },
        error => {
          this.error = true;
          this.errorMsg = error.error.Exception;
        });
  }

  getCustomers(): void {
    this.customerService.getAll()
      .subscribe(
        (data : Customer[]) => {
          this.customers = data;
          this.error = false;
        },
        error => {
          this.error = true;
          this.errorMsg = error.error.Exception;
        });
  }

  book(): void {
    this.booking.bookedRooms = this.booking.bookedRooms.filter(
      r=>this.selectedRooms.includes(r.roomId.roomNumber)
    );
    this.booking.cost = 0;
    for (let room of this.booking.bookedRooms) {
      this.booking.cost += room.price;
      room.occupancy = room.capacity;
    }
    this.booking.custID = +this.selectedCustID;
    this.booking.timeStamp = new Date().toISOString();
    this.booking.startDate = this.range.value.start;
    this.booking.endDate = this.range.value.end;
    this.bookingService.book(this.booking)
      .subscribe(
        (data : Booking) => {
          this.booking = data;
          this.error = false;
        },
        error => {
          this.error = true;
          this.errorMsg = error.error.Exception;
        });
  }


}
