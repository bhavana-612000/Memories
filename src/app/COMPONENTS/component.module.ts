import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './popover/popover.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [PopoverComponent,HeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[PopoverComponent,HeaderComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentModule { }
