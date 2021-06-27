import { Component,OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, PopoverController, ToastController } from '@ionic/angular';
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
  Register:boolean=false
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

  

  ngOnInit() {
  }
  RegisterUser(){
    if(this.Register){
      console.log(this.Register)
      this.createAccount()
    }
    else{
      console.log(this.Register)
      this.register()
    }
  }
  register(){
    this.Register=true
  }
  async createAccount(){
    await this.afAuth.createUserWithEmailAndPassword(
      this.user.email,
      this.user.password
    ).then(() =>{
      this.Register=!this.Register
      console.log("Registration Successfull!")
    })
    .catch((err) =>{
      this.errMessage=err.code
    })
    if(this.Register==true){
      this.toastMessage()
    }
    else{
      return this.Register
    }
  }

  async login(){
    await this.afAuth.signInWithEmailAndPassword(
      this.user.email,
      this.user.password
    ).then( () =>{
      this.success=true
      console.log("Success!")
    })
    .catch(err =>{
      this.errMessage=err.code
    })
    if(this.success==true){
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



