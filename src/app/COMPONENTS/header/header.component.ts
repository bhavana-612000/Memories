import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() name:string
  constructor(
    public popoverController:PopoverController,
    private router:Router
  ) { }
    back(){
      this.router.navigate(['/login'])
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
  ngOnInit() {}

}
