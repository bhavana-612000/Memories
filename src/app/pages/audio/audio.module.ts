import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudioPageRoutingModule } from './audio-routing.module';

import { AudioPage } from './audio.page';
import { ComponentModule } from 'src/app/COMPONENTS/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudioPageRoutingModule,
    ComponentModule
  ],
  declarations: [AudioPage]
})
export class AudioPageModule {}
