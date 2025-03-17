import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceWSService {
  // URL base para la API
  url = 'http://localhost:8000/api/Cajero';

  constructor(private http: HttpClient) { }

  // Método para obtener el total de dinero
  mostrarT(): Observable<number> {
    return this.http.get<number>(this.url + "/totalDinero");
  }
  
  // Método para retirar dinero
  retirarDinero(monto: number): Observable<string> {
    return this.http.post<string>(`${this.url}/retirar/${monto}`, null).pipe(
      catchError((error) => {
        console.error('Error en la solicitud de retiro', error);
        return throwError(() => new Error('No se pudo completar el retiro'));
      })
    );
  }
  
}
