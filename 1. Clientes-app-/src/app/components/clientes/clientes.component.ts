import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: []
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  constructor(private _clienteService: ClientesService) {}

  ngOnInit() {
    this._clienteService.getClientes().subscribe( data => {
      this.clientes = data;
    });
  }

}
