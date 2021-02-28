import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
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
    public popoverController:PopoverController
  ) { }


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
    );
  //  this.success=true;
    if(this.success==true){
      this.router.navigate(['/home'])
    }
    else{
      this.errMessage = console.error(Message);
      console.log(this.errMessage)
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
  back(){
    this.router.navigate(['/home'])
  }


}
