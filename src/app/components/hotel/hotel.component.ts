import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel.model';
import { HotelBrand } from 'src/app/models/hotelbrand.model';
import { HotelService } from 'src/app/services/hotel.service';
import { HotelBrandService } from 'src/app/services/hotelbrand.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotelBrand = new HotelBrand();
  hotel = new Hotel();
  submitted = false;
  firstTime = true;
  currentIndex = -1;
  error = false;
  errorMsg?: string;

  constructor(private hotelService: HotelService, private hotelBrandService: HotelBrandService) { }

  ngOnInit() {
    this.hotelBrand = Object.assign(new HotelBrand(), history.state);
    console.log("received:", this.hotelBrand)
    this.retrieveHotelBrand()  
  }

  retrieveHotelBrand(): void {
    this.hotelBrandService.get(this.hotelBrand.brandId)
      .subscribe(
        (data : HotelBrand) => {
          this.hotelBrand = data;
          this.error = false;
        },
        error => {
          this.error = true;
          this.errorMsg = error.error.Exception;
        });
  }

  saveLocation(): void {
    console.log("to save:", this.hotelBrand)
    this.hotel.brandId = this.hotelBrand.brandId;
    this.hotel.totalNumberOfRooms = 0;
    this.hotelService.create(this.hotel)
      .subscribe(
        (response: Hotel) => {
          console.log(response);
          this.hotelBrand?.hotels?.push(response);
          this.submitted = true;
          this.error = false;
        },
        error => {
          this.error = true;
          this.errorMsg = error.error.Exception;
        });
  }

  newLocation(): void {
    this.submitted = false;
    this.firstTime = false;
    this.hotel = new Hotel();
    this.error = false;
  }


}
