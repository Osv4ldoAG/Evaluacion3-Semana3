import { Component } from '@angular/core';
import { ServiceWSService } from '../../service/service-ws.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mostar-cajero',
  imports: [FormsModule],
  templateUrl: './mostar-cajero.component.html',
  styleUrl: './mostar-cajero.component.css'
})
export class MostarCajeroComponent {

  cantidadRetirar: number = 0;

  constructor(private router: Router, private service: ServiceWSService) {}

  retirarDinero() {
    if (this.cantidadRetirar <= 0) {
      Swal.fire({
        icon: "warning",
        title: "Monto inválido",
        text: "Ingresa una cantidad válida para retirar.",
      });
      return;
    }
    this.service.retirarDinero(this.cantidadRetirar).subscribe(
      (response: string) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Retiro exitoso",
          text: `Se retiraron $${this.cantidadRetirar} correctamente.`,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['movimientoT']);
      },
      (error: any) => {
        if (error.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Error en el retiro",
            text: `No se pudo completar la transacción: ${error.error}`,
            confirmButtonText: "OK"
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error en el retiro",
            text: "Hubo un problema al procesar tu solicitud.",
            confirmButtonText: "OK"
          });
        }
      }
    );
  }
  
  
  
  
}
