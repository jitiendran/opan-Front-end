import { StudentserviceService } from './../studentservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  constructor(private stud: StudentserviceService) {}
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
  isThere: boolean = false;
  ngOnInit(): void {
    this.Notifications = this.stud.Notifications;
    if (this.stud.Notifications.length !== 0) {
      this.isThere = true;
    } else {
      this.isThere = false;
    }
  }
}
