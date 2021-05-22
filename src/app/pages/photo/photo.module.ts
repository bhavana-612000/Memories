import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoPageRoutingModule } from './photo-routing.module';

import { PhotoPage } from './photo.page';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { ComponentModule } from 'src/app/COMPONENTS/component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoPageRoutingModule,
    AngularFireStorageModule,
    ComponentModule
  ],
  declarations: [PhotoPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CameraPageModule {}
