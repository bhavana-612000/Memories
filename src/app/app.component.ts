import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { FcmService } from './fcm.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(
    public fcm:FcmService,
    public router:Router,
    private platform:Platform,
    private toastCtrl:ToastController
  ) {
    this.initializeApp()
  }
  async presentToast(message){
    const toast = await this.toastCtrl.create({
      message,
      duration:3000
    });
    toast.present()
  }
  private notificationSetup(){
    this.fcm.getToken();
    this.fcm.onNotifications().subscribe(
      (msg) =>{
        if(this.platform.is('ios')){
          this.presentToast(msg.aps.alert);
        }
        else{
          this.presentToast(msg.body);
        }
      });
  }
  initializeApp(){
    this.platform.ready().then(() =>{
      this.notificationSetup()
    })
  }
  
}
