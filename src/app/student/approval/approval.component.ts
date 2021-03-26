import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss'],
})
export class ApprovalComponent implements OnInit {
  table: { no: number; doc: string; status: string }[] = [
    {
      no: 1,
      doc: 'this is doc',
      status: 'Approved',
    },
    {
      no: 2,
      doc: 'this is doc',
      status: 'nope',
    },
    {
      no: 3,
      doc: 'this is doc',
      status: 'Approved',
    },
    {
      no: 4,
      doc: 'this is doc',
      status: 'Approved',
    },
    {
      no: 5,
      doc: 'this is doc',
      status: 'Approved',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
