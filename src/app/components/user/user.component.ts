import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking.model';
import { BookedRoom } from 'src/app/models/bookedRoom.model';
import { BookingService } from 'src/app/services/booking.service';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  bookingId = '';
  bookings: Booking[] = [];

  customer?: Customer;
  rented = false;

  error = false;
  errorMsg?: string;

  constructor(
    private bookingService: BookingService,
  )
  {  }

  ngOnInit(): void {
  }

  findBooking(): void {
    this.bookingService.getHistory(this.bookingId)
      .subscribe(
        (data : Booking[]) => {
          if (data == null) {
            this.error = true;
            this.errorMsg = 'Cannot find this booking';
            return;
          }
          this.bookings = data;
          this.error = false;
        },
        error => {
          this.error = true;
          this.errorMsg = error.error.Exception;
        });
  }
}
