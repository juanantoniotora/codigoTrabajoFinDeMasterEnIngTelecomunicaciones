import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appFrontend';

  datosEnviadosAlHijoCompApp:String     = "Datos del Comp.Padre enviados y escritos en el Comp.Hijo.";
  datosRecibidosDelHijoCompApp:String   = "";



  
  /** Constructor de la clase 
   * Para declaraciones globales de la clase y supervariables.
   * Desde el constructor de clase no podremos acceder a los elementos del componente.
  */
  constructor(){
    console.log("1) Constructor de la clase");
  }


/**********************************************************************************
    *** Funciones mientras se crea el componente ***
**********************************************************************************/

  /** El "ngOnChanges" es la primera funcion que se ejecuta de nuestro componente.
   *  Se ejecuta cada vez que un valor de entrada se mofica o aparezca.
   *  Esta funcion se dispara cada vez que le llegue un valor al componente desde el exterior del componente.
   * */
  ngOnChanges(): void {
    console.log("2)ngOnChanges");
  }

  /** Se ejecuta después del "ngOnChanges".
   *  Es el constructor interno del componente.
   * Se ejecuta una sola vez y nunca mas. 
   * */
  ngOnInit(): void {
    console.log("3) ngOnInit - Constructor del componente");
  }

  /** Se ejecuta despues del ngOnInit, y vuelve a ejecutarse cada vez que se realicen cambios en el componente.
   *  Esta funcion sirve para comprobar constantemente si algo de nuestro componente ha cambiado.
   * */ 
  ngDoCheck(): void {
    console.log("4) ngDoCheck");
  }



/**********************************************************************************
    *** Funciones después de que se cree el componente ***
    -> Estas funciones forman parte el componente, porque afecta al template del componente.
    -> No sirven en un servicio ni con directivas.
**********************************************************************************/

  /** Se carga cuando todo el contenido del HTML este cargado. */
  ngAfterContentInit(): void {
    console.log("5) ngAfterContentInit");
  }

  /** se ejecuta cuando haya algo modificado despues de terminar de cargar el HTML  */
  ngAfterContentChecked(): void {
    console.log("6) ngAfterContentChecked");
  }

  /** Para comprobar que los Views y ViewChild estan cargados. 
   *  La funcion que mas se utiliza del grupo de funciones "ngAfter...".
  */
  ngAfterViewInit(): void {
    console.log("7) ngAfterViewInit");
  }

  /** Se ejecuta cada vez que un View o ViewChild se modifica.
   * 
   */
  ngAfterViewChecked(): void {
    console.log("8) ngAfterViewChecked");
  }


/**********************************************************************************
    *** Funcion para destruir el componente ***
**********************************************************************************/

  /** ngOnDestroy: si tenemos muchos componentes activos y dejamos de usar alguno, es aconsejable destruirlo.
   * En los componentes se pueden hacer muchas operaciones: listener, observables, llamadas, etc.
   * Con ngOnDestroy, se cierran los listener, observables, llamadas, etc. 
   * Luego se destruye el componente.
   * */ 
  ngOnDestroy(): void {
    console.log("9) ngOnDestroy");
  }
}

