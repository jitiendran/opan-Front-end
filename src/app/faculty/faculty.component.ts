import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss'],
})
export class FacultyComponent implements OnInit {
  from: FormGroup = new FormGroup({
    Message: new FormControl(null, Validators.required),
    AttachmentURL: new FormControl(null, Validators.required),
    year: new FormControl(null, Validators.required),
  });
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  onSubmit() {
    const rid = this.route.snapshot.params['id'];
    const data = { Rid: rid, ...this.from.value };
    console.log(data);
    this.http.post('http://localhost:3000/createnotification', data).subscribe(
      (res) => console.log(res),
      (err) => console.error(err)
    );
  }
}
