import {Room} from "./room.model";
import {Amenity} from "./amenity.model";
import {Employee} from "./employee.model";

export class Hotel {
  hotelId? : number;
  brandId? : number;
  address?: string;
  phoneNumber? : string;
  stars?: number;
  totalNumberOfRooms? : number;
  email?: string;
  rooms?: Room[];
  amenities?: Amenity[];
  employees?: Employee[];
}
