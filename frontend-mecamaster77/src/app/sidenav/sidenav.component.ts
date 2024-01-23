import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule ,
    // * MATERIAL IMPORTS      
    MatSidenavModule,
    MatIconModule,
    MatListModule,    
    HeaderComponent,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }

}
