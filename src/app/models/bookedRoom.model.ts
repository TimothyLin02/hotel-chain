import {BookedRoomId} from "./bookedRoomId.model";

export class BookedRoom {
  roomId: BookedRoomId = new BookedRoomId();
  price : number = 0;
  address?: string;
  capacity: number = 0;
  occupancy: number = 0;
  extendable : boolean = false;
  view?: string;
}
