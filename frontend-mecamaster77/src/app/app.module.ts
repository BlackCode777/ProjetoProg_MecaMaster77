import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutes } from './app.routes';
import { ComponentesModule } from "./componentes/componentes.module";

@NgModule({
    declarations: [],
    imports: [
        ComponentesModule,
        CommonModule,
        BrowserModule,
        AppRoutes,
        BrowserAnimationsModule,
        // * MATERIAL IMPORTS
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatDividerModule,
        MatListModule,
    ],
    providers: [],
    bootstrap: [],
  })
  export class AppModule { }