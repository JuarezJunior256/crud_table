import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const clientes = [
      {id: 1, nome: 'Luciano Silva', email: 'fulano@gmail.com'},
      {id: 2, nome: 'Ricardo Silva', email: 'fulano@gmail.com'},
      {id: 3, nome: 'Luciana Silva', email: 'fulano@gmail.com'},
      {id: 4, nome: 'Fernando Silva', email: 'fulano@gmail.com'},
      {id: 5, nome: 'Luciano Pereira', email: 'fulano@gmail.com'},
      {id: 6, nome: 'Felipe Moreira', email: 'fulano@gmail.com'},
      {id: 7, nome: 'Flavio Rodrigues', email: 'fulano@gmail.com'},
      {id: 8, nome: 'Luciano Costta', email: 'fulano@gmail.com'}
    ];

    return {clientes};
  }

  constructor() { }
}
