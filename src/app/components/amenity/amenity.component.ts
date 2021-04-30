import { Component, OnInit } from '@angular/core';
import { Amenity } from 'src/app/models/amenity.model';
import { AmenityService } from 'src/app/services/amenity.service';

@Component({
  selector: 'app-amenity',
  templateUrl: './amenity.component.html',
  styleUrls: ['./amenity.component.css']
})
export class AmenityComponent implements OnInit {
  amenities : Amenity[] = [];
  amenity = new Amenity();
  submitted = false;
  firstTime = true;

  error = false;
  errorMsg?: string;

  constructor(private amenityService: AmenityService) { }

  ngOnInit(): void {
    this.retrieveAmenities();
  }

  retrieveAmenities(): void {
    this.amenityService.getAll()
      .subscribe(
        (data : Amenity[]) => {
          this.amenities = data;
          this.error = false;
        },
        error => {
          this.error = true;
          this.errorMsg = error.error.Exception;
        });
  }

  saveAmenity(): void {
    this.amenityService.create(this.amenity)
      .subscribe(
        response => {
          this.amenities.push(response);
          this.submitted = true;
          this.error = false;
        },
        error => {
          this.error = true;
          this.errorMsg = error.error.Exception;
        });
  }

  newAmenity(): void {
    this.firstTime = false;
    this.submitted = false;
    this.amenity = new Amenity();
    this.error = false;
  }
}
