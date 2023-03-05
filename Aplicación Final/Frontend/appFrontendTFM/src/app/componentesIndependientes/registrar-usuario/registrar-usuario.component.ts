import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { Failure, NotFoundFailure } from './Failue';
import { UnknownFailure } from  './Failue';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})


export class RegistrarUsuarioComponent implements OnInit {

  loading : boolean = false;
  mostrarMensajeExitoRegistro : boolean = false;
  mostrarMensajeErrorRegistro : boolean = false;
  mensajeInfo : String = "";
  registrarUsuario : FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth : AngularFireAuth,
    private router : Router
  ) {
    this.registrarUsuario = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword : ['', Validators.required],
    })
    this.loading = false;
    this.mostrarMensajeExitoRegistro = false;
    this.mostrarMensajeErrorRegistro = false;
    this.mensajeInfo = "";
   }

  ngOnInit(): void {
  }


  registrarse(){
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;
    
    console.log(email, password, repetirPassword);
    
    this.loading = true;

    if(password!=repetirPassword){
      try{
        throw new UnknownFailure("Las contraseñas no coinciden.");
      }
      catch(e:any){
        console.log('Las contraseñas no coinciden.');
        this.mensajeInfo ='Las contraseñas no coinciden.';
        this.loading=false;
        
        this.mostrarMensajeErrorRegistro=true;
        this.mostrarMensajeExitoRegistro=false;
      }
      
    }
    else{
      //crear usuario con email y password
      this.afAuth.createUserWithEmailAndPassword(email, password).then(async (user) => {
        console.log(this.registrarUsuario)
        //console.log(user);
        this.loading=false;
        
        this.mostrarMensajeErrorRegistro=false;
        this.mostrarMensajeExitoRegistro=true;
        this.mensajeInfo='Usuario Creado';
        
        await this.delay(2000);
        this.router.navigate(['/login'])
      }).catch(async (error) => {
        console.log(this.registrarUsuario)
        this.loading=true;
        await this.delay(1000);
        this.loading=false;
        console.log(error);
        
        this.mostrarMensajeErrorRegistro=true;
        this.mostrarMensajeExitoRegistro=false;
        this.mensajeInfo=this.firebaseError(error.code)
      })
    }
  }

  firebaseError(code:String){
    switch(code){
      case 'auth/email-already-in-use':
        return 'El usuario ya existe'
      case 'auth/weak-password':
        return 'La contaseña es muy débil'
      case 'auth/invalid-email':
        return 'Correo inválido'
      default: 
        return 'Error desconocido'
    }
  }


  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}





