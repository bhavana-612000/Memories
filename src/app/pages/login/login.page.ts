import { Component,OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ModalController, PopoverController, ToastController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/COMPONENTS/popover/popover.component';
import { CalenderPage } from '../../calender/calender.page';

interface User{
  email?:string,
  password?:string
}
@Component({
  selector: 'app-',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  success:boolean=false;
  errMessage:any;
  user: User={
    email:'',
    password:''
  }
  nav: any;
  constructor(
    public afAuth:AngularFireAuth,
    public router:Router,
    public modelController:ModalController,
    public popoverController:PopoverController,
    private toastCtrl :ToastController,
  ) { 
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component:PopoverComponent,
      cssClass: 'popover_setting',
      event: ev,
      translucent: true
    });
    return await popover.present();
    }

  ngOnInit() {
  }

  async createAccount(){
    await this.afAuth.createUserWithEmailAndPassword(
      this.user.email,
      this.user.password
    );
    console.log(this.user)
  }

  async login(){
    await this.afAuth.signInWithEmailAndPassword(
      this.user.email,
      this.user.password
    ).then( value =>{
      this.success=true
      console.log("Success!")
    })
    .catch(err =>{
      this.errMessage=err.code
      // console.log(err.message)
    })
    if(this.success==true){
      // this.router.navigate(['/home'])
      return this.success
    }
     else{
       this.toastMessage()
    }
    
  }

  async logout(){
await this.afAuth.signOut()
  };
  async openCalender() {
    const modal = await this.modelController.create({
      component :CalenderPage
    });
    return await modal.present();
};

async toastMessage(){
  let toast = await this.toastCtrl.create({
    cssClass:'ionToast',
    duration:3000,
    message:this.errMessage,
    position:'bottom',
    keyboardClose:true,
    animated:true
   });
  await toast.present()
  }
}



