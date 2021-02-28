import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CameraPageRoutingModule } from './camera-routing.module';

import { CameraPage } from './camera.page';
import {AngularFireStorageModule} from '@angular/fire/storage';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraPageRoutingModule,
    AngularFireStorageModule
  ],
  declarations: [CameraPage]
})
export class CameraPageModule {}
