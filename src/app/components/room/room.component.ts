import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel.model';
import { Room } from 'src/app/models/room.model';
import { Employee } from 'src/app/models/employee.model';
import { RoomService } from 'src/app/services/room.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  hotel = new Hotel(); 

  constructor(private roomService: RoomService,
    private employeeService: EmployeeService
  )
  { }

  ngOnInit(): void {
    this.hotel = Object.assign(new Hotel(), history.state);
    console.log("received:", this.hotel)
  }

}
