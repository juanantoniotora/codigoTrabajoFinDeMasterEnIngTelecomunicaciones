import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './componentesIndependientes/dashboard/dashboard.component';
import { ErrorComponent } from './componentesIndependientes/error/error.component'
import { LoginComponent } from './componentesIndependientes/login/login.component';
import { RecuperarPasswordComponent } from './componentesIndependientes/recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './componentesIndependientes/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './componentesIndependientes/verificar-correo/verificar-correo.component';

const routes: Routes = [
  {path:'inicio',             component : LoginComponent},
  {path:'login',              component : LoginComponent},
  {path:'signup',             component : RegistrarUsuarioComponent},
  {path:'recuperar-password', component: RecuperarPasswordComponent},
  {path:'dashboard',          component : DashboardComponent},
  {path:'verficar-correo',    component : VerificarCorreoComponent},
  {path:'',                   redirectTo: '/inicio', pathMatch: 'full'},
  {path :'**',                component : ErrorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
