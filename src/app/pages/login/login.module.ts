import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { PopoverComponent } from 'src/app/COMPONENTS/popover/popover.component';
import { ComponentModule } from 'src/app/COMPONENTS/component.module';


@NgModule({
  entryComponents:[PopoverComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ComponentModule
  ],
  declarations: [LoginPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPageModule {}
