import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      CommonModule, 
      RouterOutlet, 
      RouterLink, 
      RouterLinkActive, 

      // * MATERIAL IMPORTS      
      MatSidenavModule,
      MatToolbarModule,
      MatMenuModule,
      MatIconModule,
      MatDividerModule,
      MatListModule,
      HeaderComponent,

      //CoMPONENTES
      HomeComponent
    ]
})
export class AppComponent {
  title = 'MecaMaster77';
}
