import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { Hotel } from 'src/app/models/hotel.model';
import { Booking } from 'src/app/models/booking.model';
import { BookedRoom } from 'src/app/models/bookedRoom.model';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { CheckinService } from 'src/app/services/checkin.service';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-walking',
  templateUrl: './walking.component.html',
  styleUrls: ['./walking.component.css']
})
export class WalkingComponent implements OnInit {
  hotel = new Hotel();

  customers : Customer[] = [];
  selectedCustID: string = "";

  employees : Employee[] = [];
  selectedEmployeeId: string = "";

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
    private employeeService: EmployeeService,
    private checkinService: CheckinService,
    private customerService: CustomerService,
    private bookingService: BookingService
  )
  {
  }

  ngOnInit(): void {
    this.hotel = Object.assign(new Hotel(), history.state);
    this.retrieveCustomers();
    this.retrieveEmployees();
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
  retrieveEmployees(): void {
    this.employeeService.getAll()
      .subscribe(
        (data : Employee[]) => {
          this.employees = data;
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

  rent(): void {
    this.booking.bookedRooms = this.booking.bookedRooms.filter(
      r=>this.selectedRooms.includes(r.roomId.roomNumber)
    );
    this.booking.cost = 0;
    for (let room of this.booking.bookedRooms) {
      this.booking.cost += room.price;
      room.occupancy = room.capacity;
    }
    this.booking.custID = +this.selectedCustID;
    this.booking.servicedBy = +this.selectedEmployeeId;
    this.booking.timeStamp = new Date().toISOString();
    this.booking.startDate = this.range.value.start;
    this.booking.endDate = this.range.value.end;
    this.checkinService.book(this.booking)
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
