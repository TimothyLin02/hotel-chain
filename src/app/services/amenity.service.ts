import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Amenity } from '../models/amenity.model';

const baseUrl = 'http://localhost:8080/api/amenity';

@Injectable({
  providedIn: 'root'
})
export class AmenityService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Amenity[]> {
    return this.http.get<Amenity[]>(baseUrl);
  }

  get(id: any): Observable<Amenity> {
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

}
