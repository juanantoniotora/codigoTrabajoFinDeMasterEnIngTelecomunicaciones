import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading : boolean = false;
  mostrarMensajeErrorRegistro : boolean = false;
  mostrarMensajeExitoRegistro : boolean = false;
  mensajeInfo : String = "";
  loginUsuario : FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth : AngularFireAuth,
    private router : Router
  ) {
    this.loginUsuario = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required],
    })
    this.loading = false;
    this.mostrarMensajeErrorRegistro = false;
    this.mensajeInfo = "";
   }

  ngOnInit(): void {
  }

  login(){
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;
    console.log(email, password);

    this.loading = true;
    this.afAuth.signInWithEmailAndPassword(email, password).then((user)=>{
      console.log(user);
      this.router.navigate(['/dashboard'])
    }).catch((error)=>{
      this.loading = false;
      console.log('error');
      this.loading=false;
      console.log(error);
      this.mostrarMensajeErrorRegistro=true;
      this.mostrarMensajeExitoRegistro=false;
      this.mensajeInfo=this.firebaseError(error.code)
    })
  }

  firebaseError(code:String){
    switch(code){
      // password invalida
      case 'auth/invalid-password':
        return 'Contraseña inválida'
      // password incorrecta
      case 'auth/wrong-password':
        return 'Contraseña incorrecta'
      // correo invalido
      case 'auth/invalid-email':
        return 'Correo inválido'
      case 'auth/user-not-found':
        return 'El usuario no existe'
      // cualquier otro error no contemplado
      default: 
        return 'Email/Password incorrecto'
    }
  }

}
