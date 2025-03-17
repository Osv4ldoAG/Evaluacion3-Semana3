import { Routes } from '@angular/router';
import { MostarCajeroComponent } from './Componente/mostar-cajero/mostar-cajero.component';
import { MostrarAdministradorComponent } from './Componente/mostrar-administrador/mostrar-administrador.component';

export const routes: Routes = [

    {path : 'movimientoT', component : MostarCajeroComponent},
    {path : 'administradorT', component : MostrarAdministradorComponent}
];
