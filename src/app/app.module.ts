import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule,  MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { HotelBrandComponent } from './components/hotelbrand/hotelbrand.component';
import { HotelBrandDetailsComponent } from './components/hotel-brand-details/hotel-brand-details.component';
import { RoomComponent } from './components/room/room.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { BookingComponent } from './components/booking/booking.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CancelComponent } from './components/cancel/cancel.component';
import { AmenityComponent } from './components/amenity/amenity.component';
import { LocationDetailsComponent } from './components/location-details/location-details.component';
import { WalkingComponent } from './components/walking/walking.component';
import { LoginComponent } from './components/login/login.component';
import { AvailableRoomsComponent } from './components/available-rooms/available-rooms.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HotelComponent,
    HotelBrandComponent,
    HotelBrandDetailsComponent,
    RoomComponent,
    CustomerComponent,
    EmployeeComponent,
    BookingComponent,
    CheckinComponent,
    CheckoutComponent,
    CancelComponent,
    AmenityComponent,
    LocationDetailsComponent,
    WalkingComponent,
    LoginComponent,
    AvailableRoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
