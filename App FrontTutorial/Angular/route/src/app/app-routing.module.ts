import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CreateComponenteComponent } from './task/create-componente/create-componente.component';
import { ListaComponenteComponent } from './task/lista-componente/lista-componente.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';



const routes: Routes = [
  {path:'list',   component : ListaComponenteComponent},
  {path:'create', component : CreateComponenteComponent},
  {path:'login',  component : LoginComponent},
  {path:'logout', component : LogoutComponent},
  {path:'',       redirectTo: '/list', pathMatch: 'full'},
  {path:'**',     component : ErrorPersonalizadoComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



