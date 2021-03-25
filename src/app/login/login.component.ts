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
    Username: new FormControl(null, Validators.required),
    Password: new FormControl(null, Validators.required),
  });
  constructor(private authSerice: AuthserviceService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    this.authSerice.onLogin(this.form.value).subscribe(
      (res) => {
        // localStorage.setItem('tokens',res)
        // if (res.designation == 'Student') {
        //   this.router.navigateByUrl('/Student');
        // } else if (res.designaiton == 'Faculty') {
        //   this.router.navigateByUrl('/Faculty');
        // }
        // this.router.navigateByUrl('/Blog')
        console.log(res);
      },

      (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this.router.navigateByUrl('/');
          }
        }
      }
    );
  }
}
