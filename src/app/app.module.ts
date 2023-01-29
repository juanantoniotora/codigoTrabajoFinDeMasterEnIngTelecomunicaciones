import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { InicioComponent } from './inicio/inicio.component';
import { GratisComponent } from './gratis/gratis.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { BuscarComponent } from './buscar/buscar.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PerfilComponent } from './rueda/perfil/perfil.component';
import { ConfiguracionComponent } from './rueda/configuracion/configuracion.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
//import { MaterialModule }   from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    InicioComponent,
    GratisComponent,
    PeliculasComponent,
    SeriesComponent,
    BuscarComponent,
    LoginComponent,
    LogoutComponent,
    SignUpComponent,
    PerfilComponent,
    ConfiguracionComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
