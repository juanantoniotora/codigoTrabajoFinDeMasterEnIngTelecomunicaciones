import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BuscarComponent } from './buscar/buscar.component';
import { GratisComponent } from './gratis/gratis.component';
import { InicioComponent } from './inicio/inicio.component';
//import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PerfilComponent } from './rueda/perfil/perfil.component';
import { ConfiguracionComponent } from './rueda/configuracion/configuracion.component';
import { SeriesComponent } from './series/series.component';
//import { SignUpComponent } from './sign-up/sign-up.component';

import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { LoginComponent } from './componentes/login/login.component';
import { VerificarCorreoComponent } from './componentes/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './componentes/recuperar-password/recuperar-password.component'; 
import { ErrorUrlComponent } from './componentes/error-url/error-url.component';

const routes: Routes = [
  {path:'inicio',           component : InicioComponent},
  {path:'gratis',           component : GratisComponent},
  {path:'peliculas',        component : PeliculasComponent},
  {path:'series',           component : SeriesComponent},
  {path:'buscar',           component : BuscarComponent},
  {path:'logout',           component : LogoutComponent},
  {path:'perfil',           component : PerfilComponent},
  {path:'configuracion',    component : ConfiguracionComponent},
  {path:'sign-up',          component : RegistrarUsuarioComponent},
  {path:'log-in',           component : LoginComponent},
  {path:'verficar-correo',  component : VerificarCorreoComponent},
  {path:'recuperar-password',component : RecuperarPasswordComponent},
  {path:'',                 redirectTo: '/inicio', pathMatch: 'full'},
  {path :'**',              component : ErrorUrlComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
