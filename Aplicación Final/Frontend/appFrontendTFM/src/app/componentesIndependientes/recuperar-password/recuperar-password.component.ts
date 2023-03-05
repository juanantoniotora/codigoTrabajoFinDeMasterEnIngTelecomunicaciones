import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {

  loading : boolean = false;
  mostrarMensajeErrorRegistro : boolean = false;
  mostrarMensajeExitoRegistro : boolean = false;
  mensajeInfo : String = "";
  recuperarUsuario : FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth : AngularFireAuth,
    private router : Router
  ) {
    this.recuperarUsuario = this.fb.group({
      correo : ['', Validators.required],
    })
    this.loading = false;
    this.mostrarMensajeErrorRegistro = false;
    this.mensajeInfo = "";
  }

  ngOnInit(): void {
  }

  recuperar(){
    console.log("1");
    const email = this.recuperarUsuario.value.correo;
    console.log(email);
    this.loading = true;
    this.afAuth.sendPasswordResetEmail(email).then(async ()=>{
      console.log("exito recuperarPassword()");
      this.mostrarMensajeErrorRegistro=false;
      this.mostrarMensajeExitoRegistro=true;
      this.mensajeInfo="Correo enviado"
      await this.delay(1000);
      this.loading=false; 
      await this.delay(2000);
      this.router.navigate(['/login'])
      
    }).catch((error)=>{
      console.log('error recuperarPassword()');
      this.loading=false;  
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

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
