import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { GratisComponent } from './gratis/gratis.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { BuscarComponent } from './buscar/buscar.component';
import { LogoutComponent } from './logout/logout.component';
import { PerfilComponent } from './rueda/perfil/perfil.component';
import { ConfiguracionComponent } from './rueda/configuracion/configuracion.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { VerificarCorreoComponent } from './componentes/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './componentes/recuperar-password/recuperar-password.component'; 

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { ErrorUrlComponent } from './componentes/error-url/error-url.component'; 
//import { MaterialModule }   from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GratisComponent,
    PeliculasComponent,
    SeriesComponent,
    BuscarComponent,
    LogoutComponent,
    PerfilComponent,
    ConfiguracionComponent,
    HeaderComponent,
    FooterComponent,
    RegistrarUsuarioComponent,
    DashboardComponent ,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    ErrorUrlComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
