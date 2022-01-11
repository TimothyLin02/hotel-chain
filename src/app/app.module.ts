import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
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
import { UserComponent } from './pages/user/user.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { HotelBrandComponent } from './pages/hotelbrand/hotelbrand.component';
import { HotelBrandDetailsComponent } from './components/hotel-brand-details/hotel-brand-details.component';
import { RoomComponent } from './components/room/room.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { BookingComponent } from './pages/booking/booking.component';
import { CheckinComponent } from './pages/checkin/checkin.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CancelComponent } from './components/cancel/cancel.component';
import { AmenityComponent } from './pages/amenity/amenity.component';
import { LocationDetailsComponent } from './pages/location-details/location-details.component';
import { WalkingComponent } from './pages/walking/walking.component';
import { LoginComponent } from './pages/login/login.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
//import { AvailableRoomsComponent } from './components/available-rooms/available-rooms.component';

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
    AppNavbarComponent,
    HomePageComponent,
//    AvailableRoomsComponent
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
    IonicModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
