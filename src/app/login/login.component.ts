import { AuthserviceService } from './../authservice.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    Rid: new FormControl(null, Validators.required),
    Password: new FormControl(null, Validators.required),
  });
  Response: any;
  constructor(private authSerice: AuthserviceService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.form.value);
    this.authSerice.onLogin(this.form.value).subscribe(
      (res) => {
        console.log('hi');
        this.Response = res;
        localStorage.setItem('token', this.Response.token);
        // console.log(this.Response.UserId);
        if (this.Response.Designation === 'student') {
          this.router.navigateByUrl(
            `/Student/${this.Response.UserId}/${this.Response.UserName}`
          );
        } else if (this.Response.Designation !== 'student') {
          this.router.navigateByUrl('/Faculty');
        }
        console.log(res);
      },

      (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this.router.navigateByUrl('/Login');
          }
        }
      }
    );
  }
}
