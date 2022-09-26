import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-status',
  templateUrl: './booking-status.page.html',
  styleUrls: ['./booking-status.page.scss'],
})
export class BookingStatusPage implements OnInit {
  segment="todaybookings"

  constructor() { }

  ngOnInit() {
  }

}
