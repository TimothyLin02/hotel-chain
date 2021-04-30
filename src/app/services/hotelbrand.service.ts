import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HotelBrand } from '../models/hotelbrand.model';

const baseUrl = 'http://localhost:8080/api/hotelbrand';

@Injectable({
  providedIn: 'root'
})
export class HotelBrandService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<HotelBrand[]> {
    return this.http.get<HotelBrand[]>(baseUrl);
  }

  get(id: any): Observable<HotelBrand> {
    return this.http.get(`${baseUrl}/${id}`);
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

  findByName(name: any): Observable<HotelBrand[]> {
    return this.http.get<HotelBrand[]>(`${baseUrl}?name=${name}`);
  }
}
