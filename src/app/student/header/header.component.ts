import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: { Rid: number; Name: string } = { Rid: 0, Name: '' };
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.user = {
      Rid: this.route.snapshot.params['id'],
      Name: this.route.snapshot.params['name'],
    };
  }
  onNotification() {
    this.router.navigate(['Notifications'], { relativeTo: this.route });
  }
}
