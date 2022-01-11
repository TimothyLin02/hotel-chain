import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel.model';
import { HotelBrand } from 'src/app/models/hotelbrand.model';
import { HotelBrandService } from 'src/app/services/hotelbrand.service';

@Component({
  selector: 'app-hotelbrand',
  templateUrl: './hotelbrand.component.html',
  styleUrls: ['./hotelbrand.component.css']
})
export class HotelBrandComponent implements OnInit {
  hotelBrands : HotelBrand[] = [];
  currentIndex : Number = -1;
  hotelBrand = new HotelBrand();
  currentHotelBrand? : HotelBrand;
  submitted = false;
  firstTime = true;

  error = false;
  errorMsg?: string;

  constructor(private hotelbrandService: HotelBrandService) { }

  ngOnInit(): void {
    this.retrieveHotelBrands();
  }

  retrieveHotelBrands(): void {
    this.hotelbrandService.getAll()
      .subscribe(
        (data : HotelBrand[]) => {
          this.hotelBrands = data;
          this.error = false;
        },
        error => {
          this.error = true;
          this.errorMsg = error.error.Exception;
        });
  }

  saveBrand(): void {
    this.hotelbrandService.create(this.hotelBrand)
      .subscribe(
        response => {
          console.log(response);
          this.hotelBrands.push(response);
          this.submitted = true;
          this.error = false;
        },
        error => {
          this.error = true;
          this.errorMsg = error.error.Exception;
        });
  }

  newBrand(): void {
    this.firstTime = false;
    this.submitted = false;
    this.hotelBrand = new HotelBrand();
    this.error = false;
  }

  setActiveHotelBranch(hoteBrand: HotelBrand, index: Number): void {
    this.currentHotelBrand = hoteBrand;
    this.currentIndex = index;
  }

  showNewHotel(): void {
    
  }
}
