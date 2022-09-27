import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'flashscreen',
    loadChildren: () => import('./flashscreen/flashscreen.module').then( m => m.FlashscreenPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'utility-componentes',
    loadChildren: () => import('./utility-componentes/utility-componentes.module').then( m => m.UtilityComponentesPageModule)
  },
  {
    path: 'booking-details',
    loadChildren: () => import('./booking-details/booking-details.module').then( m => m.BookingDetailsPageModule)
  },
  {
    path: 'book-room',
    loadChildren: () => import('./book-room/book-room.module').then( m => m.BookRoomPageModule)
  },
  {
    path: 'search-room',
    loadChildren: () => import('./search-room/search-room.module').then( m => m.SearchRoomPageModule)
  },
  {
    path: 'booking-cancelation',
    loadChildren: () => import('./booking-cancelation/booking-cancelation.module').then( m => m.BookingCancelationPageModule)
  },
  {
    path: 'booking-status',
    loadChildren: () => import('./booking-status/booking-status.module').then( m => m.BookingStatusPageModule)
  },
  {
    path: 'mycart',
    loadChildren: () => import('./mycart/mycart.module').then( m => m.MycartPageModule)
  },
  {
    path: 'refund-list',
    loadChildren: () => import('./refund-list/refund-list.module').then( m => m.RefundListPageModule)
  },
  {
    path: 'transaction-history',
    loadChildren: () => import('./transaction-history/transaction-history.module').then( m => m.TransactionHistoryPageModule)
  },
  {
    path: 'transaction-details',
    loadChildren: () => import('./transaction-details/transaction-details.module').then( m => m.TransactionDetailsPageModule)
  },
  {
    path: 'agent-profile',
    loadChildren: () => import('./agent-profile/agent-profile.module').then( m => m.AgentProfilePageModule)
  },
  {
    path: 'general-setting',
    loadChildren: () => import('./general-setting/general-setting.module').then( m => m.GeneralSettingPageModule)
  },  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
