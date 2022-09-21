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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
