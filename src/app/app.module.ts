import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {CalendarModule} from 'ion2-calendar';
import {AngularFireStorageModule} from "@angular/fire/storage";
import {FCM} from '@ionic-native/fcm/ngx';
import { ComponentModule } from './COMPONENTS/component.module';
import { Camera } from '@ionic-native/camera/ngx';
import {Media} from '@ionic-native/media/ngx';
import {File} from '@ionic-native/file/ngx';
import {MediaCapture} from '@ionic-native/media-capture/ngx'
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    CalendarModule,
    AngularFireStorageModule,
    ComponentModule,
  ],
  providers: [
    FCM,
    Camera,
    Media,
    File,
    MediaCapture,
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
