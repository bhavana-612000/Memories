import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PopoverComponent } from './popover/popover.component';



@NgModule({
  declarations: [HomeComponent,PopoverComponent],
  imports: [
    CommonModule
  ],
  exports:[HomeComponent,PopoverComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentModule { }
