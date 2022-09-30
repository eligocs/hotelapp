import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'search-room',
        loadChildren: () => import('../search-room/search-room.module').then( m => m.SearchRoomPageModule)
      },
      {
        path: 'booking-status',
        loadChildren: () => import('../booking-status/booking-status.module').then( m => m.BookingStatusPageModule)
      },
      {
        path: 'agent-profile',
        loadChildren: () => import('../agent-profile/agent-profile.module').then( m => m.AgentProfilePageModule)
      },
      
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
