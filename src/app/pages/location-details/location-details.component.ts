import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Amenity } from 'src/app/models/amenity.model';
import { Hotel } from 'src/app/models/hotel.model';
import { Room } from 'src/app/models/room.model';
import { Employee } from 'src/app/models/employee.model';
import { RoomService } from 'src/app/services/room.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  hotel = new Hotel();
  employeeSubmitted = false;
  employeeFirstTime = true;
  employeeEditing = false;
  roomSubmitted = false;
  roomFirstTime = true;
  roomEditing = false;
  employee = new Employee();
  room = new Room();
  error = false;
  errorMsg?: string;

  views = ['mountain view', 'sea view'];
  extendables = [true, false];
  amenitiesFC = new FormControl();
  amenities: Amenity[] = [];

  constructor(private roomService: RoomService,
    private employeeService: EmployeeService,
    private hotelService: HotelService
  )
  {}

  ngOnInit(): void {
    this.hotel = Object.assign(new Hotel(), history.state);
    console.log("received:", this.hotel);
    this.retrieveHotel();
  }

  retrieveHotel(): void {
    this.hotelService.get(this.hotel.hotelId)
      .subscribe(
        (data : Hotel) => {
          this.hotel = data;
          this.amenities = data.amenities ?? [];
          this.error = false;
        },
        error => {
          this.error = true;
          this.errorMsg = error.error.Exception;
        });
  }

  saveEmployee(): void {
    this.employee.hotelId = this.hotel.hotelId;
    this.employeeService.create(this.employee)
      .subscribe(
        (response: Employee) => {
          console.log(response);
          this.hotel.employees?.push(response);
          this.employeeSubmitted = true;
          this.error = false;
          this.employeeEditing = false;
        },
        error => {
          this.error = true;
          this.errorMsg = error.error.Exception;
        });
  }

  newEmployee(): void {
    this.employeeSubmitted = false;
    this.employeeFirstTime = false;
    this.employee = new Employee();
    this.error = false;
    this.employeeEditing = true;
  }

  saveRoom(): void {
    this.room.roomId.hotelId = <number>this.hotel.hotelId;
    this.room.amenities = this.amenities.filter(
      r=>this.amenitiesFC.value.includes(r.amenity)
    )
    this.room.price = +this.room.price;
    this.room.capacity = +this.room.capacity;
    this.roomService.create(this.room)
      .subscribe(
        (response: Room) => {
          console.log(response);
          this.hotel.rooms?.push(response);
          this.roomSubmitted = true;
          this.error = false;
          this.roomEditing = false;
        },
        error => {
          this.error = true;
          this.errorMsg = error.error.Exception;
        });
  }

  newRoom(): void {
    this.roomSubmitted = false;
    this.roomFirstTime = false;
    this.room = new Room();
    this.error = false;
    this.roomEditing = true;
  }

}
