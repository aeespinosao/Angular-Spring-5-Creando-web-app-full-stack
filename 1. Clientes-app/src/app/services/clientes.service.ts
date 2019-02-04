import { Injectable } from '@angular/core';
import { CLIENTES } from '../data/clientes.json';
import { Cliente } from '../models/cliente';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private urlEndPoint = 'http://localhost:8080/api/clientes';
  constructor(private _httpClient: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    /*return of(CLIENTES);*/
    return this._httpClient.get<Cliente[]>(this.urlEndPoint);
  }
}
