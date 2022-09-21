import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-utility-componentes',
  templateUrl: './utility-componentes.page.html',
  styleUrls: ['./utility-componentes.page.scss'],
})
export class UtilityComponentesPage implements OnInit {
  // booking status active tab
  segment = 'upcomingbookings';

  openmodal() {
    Swal.fire({
      title: 'Payment Successfull!',
      text: 'Successfully made payment and hotel booking',
      icon: 'success',
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
