import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StudentserviceService {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  Notifications: {
    id: string;
    attachmentURL: string;
    message: string;
    sender: string;
    time: any;
    status: boolean;
  }[] = [
    {
      id: '',
      attachmentURL: '',
      message: '',
      sender: '',
      time: '',
      status: false,
    },
  ];
  notifyClicked: boolean = false;
  notificationUrl = 'http://localhost:3000/incomingnotification';
  seenURL = 'http://localhost:3000/seennotification';
  user: { Rid: number; Name: string } = { Rid: 0, Name: '' };
  getNotification(user: { Rid: number; Name: string }) {
    return this.http.post(this.notificationUrl, user);
  }
  getuserNoftify(id: string) {
    return this.Notifications.find((data) => data.id === id);
  }
  messageSeen(ID: { nid: string; Rid: string }) {
    return this.http.post(this.seenURL, ID);
  }
}
