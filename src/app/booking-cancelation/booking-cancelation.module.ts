import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingCancelationPageRoutingModule } from './booking-cancelation-routing.module';

import { BookingCancelationPage } from './booking-cancelation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingCancelationPageRoutingModule
  ],
  declarations: [BookingCancelationPage]
})
export class BookingCancelationPageModule {}
