import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { HotelBrandComponent } from './pages/hotelbrand/hotelbrand.component';
import { CheckinComponent } from './pages/checkin/checkin.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { RoomComponent } from './components/room/room.component';
import { AmenityComponent } from './pages/amenity/amenity.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LocationDetailsComponent } from './pages/location-details/location-details.component';
import { BookingComponent } from './pages/booking/booking.component';
import { LoginComponent } from './pages/login/login.component';
//import { AvailableRoomsComponent } from './components/available-rooms/available-rooms.component';
import { WalkingComponent } from './pages/walking/walking.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
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
//  { path: 'available-rooms', component: AvailableRoomsComponent },
  { path: 'walking/:id', component: WalkingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
