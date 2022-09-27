import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralSettingPageRoutingModule } from './general-setting-routing.module';

import { GeneralSettingPage } from './general-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralSettingPageRoutingModule
  ],
  declarations: [GeneralSettingPage]
})
export class GeneralSettingPageModule {}
