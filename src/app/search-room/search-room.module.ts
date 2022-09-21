import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchRoomPageRoutingModule } from './search-room-routing.module';

import { SearchRoomPage } from './search-room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchRoomPageRoutingModule
  ],
  declarations: [SearchRoomPage]
})
export class SearchRoomPageModule {}
