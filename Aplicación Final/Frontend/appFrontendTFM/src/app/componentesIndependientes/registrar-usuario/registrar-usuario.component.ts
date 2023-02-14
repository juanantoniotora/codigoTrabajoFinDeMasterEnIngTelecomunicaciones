import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth} from '@angular/fire/compat/auth'

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  registrarUsuario : FormGroup;

  constructor(private fb: FormBuilder,
              private afAuth : AngularFireAuth) {

    this.registrarUsuario = this.fb.group({
      email : ['', Validators.required],
      password : ['', Validators.required],
      repetirPassword : ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }


  registrarse(){
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;
    
    console.log(email, password, repetirPassword);

    //crear usuario con email y password
    this.afAuth.createUserWithEmailAndPassword(email, password).then((user) => {
      console.log(user);
    }).catch((error) => {
      console.log(error);
      alert(this.firebaseError(error.code))
    })
  }

  firebaseError(code:String){
    switch(code){
      case 'auth/email-already-in-use':
        return 'El usuario ya existe'
      case 'auth/invalid-email':
        return 'La contraseña es muy débil'
      default: 
        return 'Error desconocido'
    }
  }
}
