import {Hotel} from "./hotel.model";
import {Office} from "./office.model";

export class HotelBrand {
  brandId?: number;
  hotelName?: string;
  numberOfHotels?: number;
  hotels? : Hotel[];
  offices? : Office[];
}
