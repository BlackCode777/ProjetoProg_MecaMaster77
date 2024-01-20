import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule } from '@angular/material/sidenav/sidenav-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//* MATERIAL IMPORTS



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // * MATERIAL IMPORTS
    // MatSidenavModule,
    // MatToolbarModule,
    // MatMenuModule,
    // MatIconModule,
    // MatDividerModule,
    // MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
