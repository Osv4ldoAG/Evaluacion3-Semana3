import { Component, OnInit } from '@angular/core';
import { ServiceWSService } from '../../service/service-ws.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mostrar-administrador',
  templateUrl: './mostrar-administrador.component.html',
  styleUrls: ['./mostrar-administrador.component.css']
})
export class MostrarAdministradorComponent implements OnInit {

  saldoActual: number = 0;

  constructor(private router: Router, private service: ServiceWSService) {}

  ngOnInit(): void {
    this.mostrarSaldo();
  }

  mostrarSaldo() {
    this.service.mostrarT().subscribe(
      data => {
        this.saldoActual = data;
      },
      error => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ocurrió un error al obtener el saldo",
          confirmButtonText: "OK"
        });
        console.log(JSON.stringify(error));
      }
    );
  }

  recargarSaldo(){
    
  }
}
