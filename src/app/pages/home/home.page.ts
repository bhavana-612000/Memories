import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../COMPONENTS/popover/popover.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  constructor(
    public actionSheet:ActionSheetController,
    public popoverController:PopoverController,
    public router:Router
  ) { }

  // openActionSheet(){
  //   this.actionSheet.create({
  //     header:'Create',
  //     cssClass:'text_style',
  //     buttons:[{
  //       text:'Upload Media'
  //     },
  //     {
  //       text:'Camera'
  //     }
  //   ]
  //   }).then(res => {
  //     res.present();
  //   })
  // };
     openCamera(){
      this.router.navigate(['/camera'])
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

}
