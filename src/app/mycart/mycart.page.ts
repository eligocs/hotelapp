import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.page.html',
  styleUrls: ['./mycart.page.scss'],
})
export class MycartPage implements OnInit {

  // proceedbooking sweetalert
  proceedbooking() {
    Swal.fire({
      title: 'Payment Successfull!',
      text: 'Successfully made payment and hotel booking',
      imageUrl: '../../assets/images/check.png',
      showCancelButton: true,
      confirmButtonText: 'View Booking',
      cancelButtonText: 'Not Now',
      heightAuto: false,
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
