import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, PopoverController } from '@ionic/angular';
import { FCM } from '@ionic-native/fcm/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  status:any;
  constructor(
    public actionSheet:ActionSheetController,
    public router:Router,
    private fcm:FCM,
    public platform:Platform,
    private alert:AlertController,
  ) { 
    this.initializeApp();
  }

  openCamera(){
    this.router.navigate(['/camera'])
   }

  ngOnInit() {}

initializeApp() {
  this.platform.ready().then(() => {
    this.fcm.getToken().then(token => {
      console.log(token);
    });

    this.fcm.onNotification().subscribe(data => {
      console.log(data);
      if (data.wasTapped) {
        console.log('Received in background');
        // this.router.navigate(['/notifications']);
          this.AlertPopUP();
      } else {
        console.log('Received in foreground');
        //this.router.navigate(['/notifications']);
      }
    });

    this.fcm.onTokenRefresh().subscribe(token => {
      console.log(token);
    });

    // this.fcm.unsubscribeFromTopic('marketing');
  });
}

AlertPopUP(){
  this.alert.create({
    header:"Notification!",
    subHeader:"This is a notification from firebase",
    buttons:[
      {
        text:'ok',
        handler:(data)=>{
          this.status="Welcome!!!"
        }
      }
    ]
  }).then((confirmElement)=>{
    confirmElement.present()
  })
}

}
