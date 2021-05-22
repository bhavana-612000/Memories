import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'photo',
    loadChildren: () => import('src/app/pages/photo/photo.module').then( m => m.CameraPageModule)
  },
  {
    path: 'audio',
    loadChildren: () => import('src/app/pages/audio/audio.module').then( m => m.AudioPageModule)
  },
  {
    path: 'text',
    loadChildren: () => import('src/app/pages/text/text.module').then( m => m.TextPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('src/app/pages/video/video.module').then( m => m.VideoPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
