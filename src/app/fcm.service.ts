import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Firebase} from '@ionic-native/firebase/ngx'
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  constructor(
    private firebase:Firebase,
    private afs:AngularFirestore,
    private platform:Platform
  ) {}

  async getToken(){
    let token;
     if(this.platform.is('android')){
       token=await this.firebase.getToken();
     }

     if(this.platform.is('ios')){
       token = await this.firebase.getToken();
       await this.firebase.grantPermission();
     }

     if(this.platform.is('cordova')){
       token = await this.firebase.getToken();
     }
     this.saveToken(token)
  }
  private saveToken(token){
    if(!token) return;
     const devicesRef = this.afs.collection('devices');

     const data = {
       token,
       userId:'testUserId'
     };
     return devicesRef.doc(token).set(data)
  }
  onNotifications(){
    return this.firebase.onNotificationOpen()
  }
}