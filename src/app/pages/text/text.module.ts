import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextPageRoutingModule } from './text-routing.module';

import { TextPage } from './text.page';
import { ComponentModule } from 'src/app/COMPONENTS/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextPageRoutingModule,
    ComponentModule
  ],
  declarations: [TextPage]
})
export class TextPageModule {}
