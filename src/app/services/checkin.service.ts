import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking.model';

const baseUrl = 'http://localhost:8080/api/checkin';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Booking[]> {
    return this.http.get<Booking[]>(baseUrl);
  }

  get(id: any): Observable<Booking> {
    return this.http.get<Booking>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  book(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  prepare(id: any): Observable<Booking> {
    return this.http.get<Booking>(`${baseUrl}/prepare/${id}`);
  }
}
