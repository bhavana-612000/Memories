import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoPageRoutingModule } from './video-routing.module';

import { VideoPage } from './video.page';
import { ComponentModule } from 'src/app/COMPONENTS/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoPageRoutingModule,
    ComponentModule
  ],
  declarations: [VideoPage]
})
export class VideoPageModule {}
