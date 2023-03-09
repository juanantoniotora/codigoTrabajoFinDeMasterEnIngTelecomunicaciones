import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(   
     private afAuth : AngularFireAuth,
     private router : Router) { }

  ngOnInit(): void {
  }


  logout(){
    this.afAuth.signOut().then(()=>{
      console.log("LogOut realizado.")
      this.router.navigate(["/login"])
    })
    .catch((error)=>{console.log("Error en LogOut")})
  }

}
