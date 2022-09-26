import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-booking-cancelation',
  templateUrl: './booking-cancelation.page.html',
  styleUrls: ['./booking-cancelation.page.scss'],
})
export class BookingCancelationPage implements OnInit {

  confirmBooking() {
    Swal.fire({
      title: 'Ticket ID : 12305',
      text: 'Your Refund is under process',
      imageUrl: '../../assets/images/check.png',
      showCancelButton: true,
      confirmButtonText: 'View Ticket',
      cancelButtonText: 'Not Now',
      heightAuto: false,
    });
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor() {   }

  ngOnInit() {
  }

}
