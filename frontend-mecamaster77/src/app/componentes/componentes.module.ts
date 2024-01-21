import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { SidenavComponent } from '../sidenav/sidenav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    SidenavComponent
  ]
})
export class ComponentesModule { }
