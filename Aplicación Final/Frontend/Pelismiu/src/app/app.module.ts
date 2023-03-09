import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './componentesIndependientes/login/login.component';
import { RegistrarUsuarioComponent } from './componentesIndependientes/registrar-usuario/registrar-usuario.component';
import { DashboardComponent } from './componentesIndependientes/dashboard/dashboard.component';
import { VerificarCorreoComponent } from './componentesIndependientes/verificar-correo/verificar-correo.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ErrorComponent } from './componentesIndependientes/error/error.component';
import { RecuperarPasswordComponent } from './componentesIndependientes/recuperar-password/recuperar-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    DashboardComponent,
    VerificarCorreoComponent,
    SpinnerComponent,
    ErrorComponent,
    RecuperarPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
