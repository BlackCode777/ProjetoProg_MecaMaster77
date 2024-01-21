import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { ComponentesModule } from "./componentes/componentes.module";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ComponentesModule, AppModule]
})
export class AppComponent {
  title = 'MecaMaster77';
}
