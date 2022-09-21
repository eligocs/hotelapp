import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchRoomPage } from './search-room.page';

const routes: Routes = [
  {
    path: '',
    component: SearchRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoomPageRoutingModule {}
