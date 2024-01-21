import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ComponentesModule } from "./componentes/componentes.module";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SidenavComponent } from "./sidenav/sidenav.component";

@NgModule({
    declarations: [
        SidenavComponent,
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        ComponentesModule,
        CommonModule,
        BrowserAnimationsModule,
        // * MATERIAL IMPORTS
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatDividerModule,
        MatListModule,
    ],
    exports: [
        SidenavComponent,
        HomeComponent,
        HeaderComponent
    ],
    providers: [],
    bootstrap: [],
  })
  export class AppModule { }