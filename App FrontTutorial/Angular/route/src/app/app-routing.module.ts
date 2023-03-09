import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CreateComponenteComponent } from './task/create-componente/create-componente.component';
import { ListaComponenteComponent } from './task/lista-componente/lista-componente.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:'list',   component : ListaComponenteComponent},
  {path:'create', component : CreateComponenteComponent},
  {path:'',       redirectTo: '/list', pathMatch: 'full'},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



