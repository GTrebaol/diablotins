import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { Error404Component } from './error-404/error-404.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FooterComponent, MenuComponent, Error404Component],
  exports: [FooterComponent, MenuComponent]
})
export class CoreModule { }
