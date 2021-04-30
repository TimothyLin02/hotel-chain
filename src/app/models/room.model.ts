import {RoomId} from "./roomId.model";
import {Amenity} from "./amenity.model";

export class Room {
  roomId: RoomId = new RoomId();
  price : number = 0;
  capacity: number = 0;
  extendable : boolean = false;
  view?: string;
  amenities:Amenity[] = [];
}
