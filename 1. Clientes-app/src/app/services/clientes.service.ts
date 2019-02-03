import { Injectable } from '@angular/core';
import { CLIENTES } from '../data/clientes.json';
import { Cliente } from '../models/cliente';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getClientes(): Observable<Cliente[]> {
    return of(CLIENTES);
  }
}
