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

  ngOnInit(): void {
    this.user = {
      Rid: this.route.snapshot.params['id'],
      Name: this.route.snapshot.params['name'],
    };
    this.stud.user = this.user;
  }
  onNotification() {
    this.stud.getNotification(this.user.Rid).subscribe(
      (res) => console.log(res),
      (error) => console.error(error)
    );
    this.router.navigate(['Notifications'], { relativeTo: this.route });
  }
}
