import { StudentserviceService } from './../studentservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: { Rid: number; Name: string } = { Rid: 0, Name: '' };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private stud: StudentserviceService
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
  ngOnInit(): void {
    this.user = {
      Rid: this.route.snapshot.params['id'],
      Name: this.route.snapshot.params['name'],
    };
    this.stud.user = this.user;
    this.stud.Notifications = this.Notifications;
  }
  Response: any;
  onNotification() {
    this.stud.getNotification(this.user).subscribe(
      (res) => {
        this.Response = res;
        console.log('This is : ' + this.Response);
        this.stud.notifyClicked = true;
        console.log(this.Response);
        for (let i = 0; i < this.Response.length; i++) {
          this.Notifications.push({
            id: this.Response[i].nid,
            attachmentURL: this.Response[i].attachmentURL,
            message: this.Response[i].message,
            sender: this.Response[i].sender,
            time: this.Response[i].time,
            status: this.Response[i].status,
          });
        }
      },
      (error) => console.error(error)
    );
    this.router.navigate(['Notifications'], { relativeTo: this.route });
  }
}
