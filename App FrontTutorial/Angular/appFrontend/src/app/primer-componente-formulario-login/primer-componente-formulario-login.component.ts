import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SimulacionbbddService } from '../simulacionbbdd.service';

@Component({
  selector: 'app-primer-componente-formulario-login',
  templateUrl: './primer-componente-formulario-login.component.html',
  styleUrls: ['./primer-componente-formulario-login.component.css']
})
export class PrimerComponenteFormularioLoginComponent implements OnInit {

  @Input()  datosRecibidosEnCompHijo : any;
  
  usuariosConseguidos : any = [];
  errorMessage : string = "";

  constructor(private miNuevoServicio: SimulacionbbddService) { }

  ngOnInit(): void { 
    console.log('OnInit() del comp. hijo ejecutado.')
    this.miNuevoServicio.getAllUsersFromDB()
                        .subscribe(
                          data => { this.usuariosConseguidos=data; 
                                    console.log("Cuando se crea llamada GET: "); 
                                    console.log(this.usuariosConseguidos)
                                  },
                          error => {this.errorMessage=error}
                        );
  }

  alertaDeEnvioFormulario(){
    console.log("Cuando se clica el botón ENTRAR de la izquierda: "); 
    console.log(this.usuariosConseguidos);
    alert('El formulario de Login se ha enviado.');
  }

  @Output() datosEnviadosPorCompHijo = new EventEmitter();
  enviarDatosHaciaAppComponentAlGenerarEvento(){
    this.datosEnviadosPorCompHijo.emit('DATOS DEL HIJO, RECIBIDOS Y ESCRITOS EN EL COMP. PADRE.');
  }

  // variable para directivas de bucles condicionales
  variableBooleanaNgIf    : boolean= false;
  variableStringNgSwitch  : string = "FAIL";
  coleccionNombresNgFor   :string[]= ['Juan', 'Pedro', 'Jose'];
  
  // --------------------------------------------------------------------------------------- //
  // -------------------------------------- Interpolacion ---------------------------------- //
  // --------------------------------------------------------------------------------------- //
  
  // Parte 1: interpolacion simple
  statusDeEnvioFormulario : string = "Formulario aun NO ENVIADO"
  fActualizarInfoEstadoEnvio(datoEntrante: string){
    console.log(datoEntrante);
    this.statusDeEnvioFormulario = "Formulario enviado EXITOSAMENTE";
  }

  // Parte 2: property Binding
  userNameDefault: String = "";
  passwordDefault: String = "";
  fDefaultForm(){
    this.userNameDefault = "Juan";
    this.passwordDefault = "1234";
  }
  
  // Parte 4: doble databing
  salidaDobleDatabingFieldUsername : String = "";


  
}



