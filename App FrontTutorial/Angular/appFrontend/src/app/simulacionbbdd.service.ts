import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { IAllUsersFromDB } from './IAllUsersFromDB'

import { Observable } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http'
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimulacionbbddService {

  url:string = "assets/data/allUsersFromDB.json";
  
  constructor(private _http: HttpClient) { }

  getAllUsersFromDB(): Observable<IAllUsersFromDB[]> {
    // EL METODO DEVUELVE UN OBSERVABLE DE TIPO "ARRAY DE IAllUsersFromDB"
    return this._http.get<IAllUsersFromDB[]>(this.url)
                      .pipe( 
                        catchError(this.funcionErrorHandle)
                      );
  }

  funcionErrorHandle( error : HttpErrorResponse) {
    return throwError(error.message);
  }
}


