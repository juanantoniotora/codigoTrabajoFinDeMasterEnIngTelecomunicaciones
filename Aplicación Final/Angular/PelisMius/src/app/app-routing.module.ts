import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BuscarComponent } from './buscar/buscar.component';
import { GratisComponent } from './gratis/gratis.component';
import { InicioComponent } from './inicio/inicio.component';
import { LogoComponent } from './logo/logo.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PerfilComponent } from './rueda/perfil/perfil.component';
import { ConfiguracionComponent } from './rueda/configuracion/configuracion.component';
import { SeriesComponent } from './series/series.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'logo',           component : LogoComponent},
  {path:'inicio',         component : InicioComponent},
  {path:'gratis',         component : GratisComponent},
  {path:'peliculas',      component : PeliculasComponent},
  {path:'series',         component : SeriesComponent},
  {path:'buscar',         component : BuscarComponent},
  {path:'login',          component : LoginComponent},
  {path:'logout',         component : LogoutComponent},
  {path:'signup',         component : SignUpComponent},
  {path:'perfil',         component : PerfilComponent},
  {path:'configuracion',  component : ConfiguracionComponent},
  {path:'',       redirectTo: '/inicio', pathMatch: 'full'},
]





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
