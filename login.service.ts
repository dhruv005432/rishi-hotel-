import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:3000/login'; // your Swagger/db.json endpoint

  constructor(private http: HttpClient) {}

  login(data: LoginModel): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
}
