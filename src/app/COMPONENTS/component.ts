import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {PopoverComponent} from 'src/app/COMPONENTS/popover/popover.component'


@NgModule({
  entryComponents: [PopoverComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    
  ],
  declarations:[PopoverComponent],
  exports:[PopoverComponent],
  providers: [
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class ComponentModule {}
