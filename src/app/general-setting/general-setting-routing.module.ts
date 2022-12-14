import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralSettingPage } from './general-setting.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralSettingPageRoutingModule {}
