import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentProfilePageRoutingModule } from './agent-profile-routing.module';

import { AgentProfilePage } from './agent-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentProfilePageRoutingModule
  ],
  declarations: [AgentProfilePage]
})
export class AgentProfilePageModule {}
