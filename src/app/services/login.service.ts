import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';
import { Login } from '../models/login.model';

const baseUrl = 'http://localhost:8080/api/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  findCredentials(data: Login): Observable<Customer> {
    return this.http.post(`${baseUrl}`, data);
  }
}
