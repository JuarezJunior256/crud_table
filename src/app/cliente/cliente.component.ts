import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../model/cliente.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ModalClienteComponent } from './modal-cliente/modal-cliente.component';
import { log } from 'util';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {


  displayedColumns: string[] = ['nome', 'email', 'actions'];
  clientes: Cliente[];
  teste: string;
  dataSource: MatTableDataSource<Cliente>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private clienteService: ClienteService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getCliente();
  }

  getCliente(): void {
    this.clienteService.getClientes()
        .subscribe(cliente => {
          this.clientes = cliente;
          this.dataSource = new MatTableDataSource(this.clientes);
          this.dataSource.paginator = this.paginator;
        });
  }

  buscarCliente(cliente: string) {
    this.dataSource.filter = cliente.trim().toLowerCase();
  }

  openDialogCliente() {
    const dialogRef = this.dialog.open(ModalClienteComponent, {
      width: '250px',
      data: {cliente: Cliente}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}

