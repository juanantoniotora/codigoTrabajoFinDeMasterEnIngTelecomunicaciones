import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(   
     private afAuth : AngularFireAuth,
     private router : Router,
     private cookie : CookieService) { }

  ngOnInit(): void {
    console.log("\nValor rescatado de la cookie en el componente <Dashboard>: "+  this.cookie.get("JWT_PelisMiu"))
  }


  logout(){
    this.afAuth.signOut().then(()=>{
      console.log("LogOut realizado.\n")
      this.cookie.set("JWT_PelisMiu","")
      console.log("\nValor de la cookie después de logout: "+this.cookie.get("JWT_PelisMiu"))
      this.router.navigate(["/login"])
    })
    .catch((error)=>{console.log("Error en LogOut")})
  }

}
