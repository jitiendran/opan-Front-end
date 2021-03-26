import { StudentserviceService } from './../studentservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  constructor(private stud: StudentserviceService) {}
  notifications = [];
  isThere: boolean = false;
  ngOnInit(): void {
    if (this.stud.notifications.length !== 0) {
      this.notifications = this.stud.notifications;
      this.isThere = true;
    } else {
      this.isThere = false;
    }
  }
}
