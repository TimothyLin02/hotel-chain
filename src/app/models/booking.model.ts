import {BookingId} from "./bookingId.model";
import {BookedRoom} from "./bookedRoom.model";
import {Customer} from "./customer.model";
import {Employee} from "./employee.model";

export class Booking {
  custID : number = 0;
  servicedBy? : number;
	timeStamp?: string;
	startDate?: string;
	endDate?: string;
  cost?: number;
  bookingId: number = 0;
  state: string = "";
  bookedRooms: BookedRoom[] = [];
  customer?: Customer;
  employee?: Employee;
}
