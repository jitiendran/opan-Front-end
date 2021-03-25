import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  constructor(private http: HttpClient) {}
  loginUrl = '';
  onLogin(data: { Username: string; Password: string }) {
    return this.http.post(this.loginUrl, data);
  }
  getToken() {
    return !!localStorage.getItem('token');
  }
}
