import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { PopoverController, } from '@ionic/angular';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  success:boolean=false;
  constructor(
    public afAuth:AngularFireAuth,
    private popoverController: PopoverController,
    public router:Router
  ) { }

      
  async logout(){
    await this.afAuth.signOut()
    this.success=true;
    if(this.success==true){
      this.router.navigate(['/login'])
    }
    this.popoverController.dismiss();
  }
  ngOnInit() {}

  


}
