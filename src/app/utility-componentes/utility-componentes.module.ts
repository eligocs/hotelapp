import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtilityComponentesPageRoutingModule } from './utility-componentes-routing.module';

import { UtilityComponentesPage } from './utility-componentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtilityComponentesPageRoutingModule
  ],
  declarations: [UtilityComponentesPage]
})
export class UtilityComponentesPageModule {}
