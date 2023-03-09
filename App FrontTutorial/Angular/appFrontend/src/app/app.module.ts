import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimerComponenteFormularioLoginComponent } from './primer-componente-formulario-login/primer-componente-formulario-login.component';

import { FormsModule } from "@angular/forms"

import { SimulacionbbddService } from './simulacionbbdd.service';

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module'; 

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteFormularioLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SimulacionbbddService],
  bootstrap: [AppComponent]
})
export class AppModule { }



