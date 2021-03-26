import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StudentserviceService {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  notifications = [];
  notificationUrl = '';
  user: { Rid: number; Name: string } = { Rid: 0, Name: '' };
  getNotification(Id: number) {
    return this.http.post(this.notificationUrl, Id);
  }
}
