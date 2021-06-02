import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { HotelBrandComponent } from './components/hotelbrand/hotelbrand.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RoomComponent } from './components/room/room.component';
import { AmenityComponent } from './components/amenity/amenity.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LocationDetailsComponent } from './components/location-details/location-details.component';
import { BookingComponent } from './components/booking/booking.component';
import { LoginComponent } from './components/login/login.component';
import { AvailableRoomsComponent } from './components/available-rooms/available-rooms.component';
import { WalkingComponent } from './components/walking/walking.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'hotelbrand', component: HotelBrandComponent },
  { path: 'hotel/:id', component: HotelComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'room/:id', component: RoomComponent },
  { path: 'amenity', component: AmenityComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'locationdetails/:id', component: LocationDetailsComponent },
  { path: 'booking/:id', component: BookingComponent },
  { path: 'checkin', component: CheckinComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'audit', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'available-rooms', component: AvailableRoomsComponent },
  { path: 'walking/:id', component: WalkingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
