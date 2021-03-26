import { Router, ActivatedRoute } from '@angular/router';
import { StudentserviceService } from './../studentservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  constructor(
    private stud: StudentserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
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
  isThere: boolean = false;
  ngOnInit(): void {
    this.Notifications = this.stud.Notifications;
    console.log(this.stud.notifyClicked);
    if (this.stud.Notifications.length !== 0) {
      console.log(this.stud.Notifications.length);
      this.isThere = true;
    } else {
      this.isThere = false;
    }
  }
  onClicked(id: string) {
    const ID: {
      nid: string;
      Rid: string;
    } = {
      nid: id,
      Rid: this.route.snapshot.params['id'],
    };
    this.stud.messageSeen(ID).subscribe(
      (res) => console.log(res),
      (err) => console.error(err)
    );
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }
}
