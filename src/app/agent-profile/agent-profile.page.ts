import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.page.html',
  styleUrls: ['./agent-profile.page.scss'],
})
export class AgentProfilePage implements OnInit {

  // logoutAlert
  lgooutAlert() {
    Swal.fire({
      title: 'Logout ?',
      // icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      heightAuto: false,
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
