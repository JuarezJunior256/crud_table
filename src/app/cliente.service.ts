import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Cliente} from './model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clienteUrl = 'api/clientes';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {

    return this.http.get<Cliente[]>(this.clienteUrl)
      .pipe(
        tap(_ => console.log)
      );

  }
}
