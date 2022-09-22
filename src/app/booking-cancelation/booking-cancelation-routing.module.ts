import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingCancelationPage } from './booking-cancelation.page';

const routes: Routes = [
  {
    path: '',
    component: BookingCancelationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingCancelationPageRoutingModule {}
