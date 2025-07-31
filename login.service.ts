import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  loginUser(email: string, password: string): Observable<Login[]> {
    return this.http.get<Login[]>(`${this.baseUrl}?email=${email}&password=${password}`);
  }
}
