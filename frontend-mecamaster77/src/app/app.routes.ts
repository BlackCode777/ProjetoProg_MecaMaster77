import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardIndicadorComponent } from './componentes/dashboard-indicador/dashboard-indicador.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    // Rota Home
    { path: 'home', component: HomeComponent },

    // Rota dashboard
    { path: 'dashboard-indicador', component: DashboardIndicadorComponent },
    
    // Rota padrão
    // { 
    //     path: '', 
    //     redirectTo: '/dashboard', 
    //     pathMatch: 'full' 
    // },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }


