import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

interface User{
  email?:string,
  password?:string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user: User={
    email:'',
    password:''
  }
  constructor(
    public afAuth:AngularFireAuth
  ) { }

  // async createAccount(){
  //   await this.afAuth.createUserWithEmailAndPassword(
  //     this.user.email,
  //     this.user.password
  //   );
  //   console.log(this.user)
  // }

  async login(){
    await this.afAuth.signInWithEmailAndPassword(
      this.user.email,
      this.user.password
    );
    console.log(this.user)
  }

  async logout(){
await this.afAuth.signOut()
  }

  ngOnInit() {
  }

}
