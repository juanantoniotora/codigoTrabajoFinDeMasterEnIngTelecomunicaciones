import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  loading : boolean = false;
  registrarUsuario : FormGroup;

  constructor(private fb: FormBuilder,
              private afAuth : AngularFireAuth,
              private router : Router) {

    this.registrarUsuario = this.fb.group({
      email : ['', Validators.required],
      password : ['', Validators.required],
      repetirPassword : ['', Validators.required],
    })
    this.loading = false;
   }

  ngOnInit(): void {
  }


  registrarse(){
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;
    
    console.log(email, password, repetirPassword);
    
    this.loading = true;
    //crear usuario con email y password
    this.afAuth.createUserWithEmailAndPassword(email, password).then(async (user) => {
      console.log(user);
      this.loading=false;
      await this.delay(1000);
      this.router.navigate(['/login'])
    }).catch(async (error) => {
      this.loading=true;
      await this.delay(1000);
      this.loading=false;
      console.log(error);
      alert(this.firebaseError(error.code))
    })
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



