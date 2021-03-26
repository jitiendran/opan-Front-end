import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StudentserviceService {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  Notifications: {
    attachmentURL: string;
    message: string;
    sender: string;
    time: any;
    status: boolean;
  }[] = [
    {
      attachmentURL: '',
      message: '',
      sender: '',
      time: '',
      status: false,
    },
  ];
  notificationUrl = 'http://localhost:3000/incomingnotification';
  user: { Rid: number; Name: string } = { Rid: 0, Name: '' };
  getNotification(user: { Rid: number; Name: string }) {
    return this.http.post(this.notificationUrl, user);
  }
}
