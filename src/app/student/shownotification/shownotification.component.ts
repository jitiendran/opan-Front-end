import { ActivatedRoute } from '@angular/router';
import { StudentserviceService } from './../studentservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shownotification',
  templateUrl: './shownotification.component.html',
  styleUrls: ['./shownotification.component.scss'],
})
export class ShownotificationComponent implements OnInit {
  constructor(
    private stud: StudentserviceService,
    private route: ActivatedRoute
  ) {}
  id: string = '';
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
  Notification: {
    id: string;
    attachmentURL: string;
    message: string;
    sender: string;
    time: any;
    status: boolean;
  } = {
    id: '',
    attachmentURL: '',
    message: '',
    sender: '',
    time: '',
    status: false,
  };

  ngOnInit(): void {
    // this.Notifications = this.stud.Notifications;
    // console.log(this.stud.Notifications);
    this.Notifications = this.stud.Notifications;
    this.id = this.route.snapshot.params['nid'];
    console.log('Id is : ' + this.id);
    for (let i = 0; i < this.Notifications.length; i++) {
      if (this.Notifications[i].id === this.id) {
        this.Notification = this.Notifications[i];
      }
    }
  }
}
