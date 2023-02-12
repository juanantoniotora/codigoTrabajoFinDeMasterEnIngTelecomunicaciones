import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import firebase from '@firebase/app-compat';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCjbdtucz1fY_f0nTxOFEFyxIS6aQBncco",
      authDomain: "fir-5db01.firebaseapp.com",  
    })
  }

  login(form:NgForm){
    //rescatar la info del formulario
    const emailRecuperado     = form.value.email;
    const passwordRecuperado  = form.value.password;
  }

}
