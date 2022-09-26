import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-room',
  templateUrl: './search-room.page.html',
  styleUrls: ['./search-room.page.scss'],
})
export class SearchRoomPage implements OnInit {

  // proceed booking from modal
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
