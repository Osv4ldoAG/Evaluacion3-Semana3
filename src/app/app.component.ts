import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cajero';

  constructor(private router : Router){}

  movimientoT(){
    this.router.navigate(['movimientoT']);
  }

  administradorC(){
    this.router.navigate(['administradorT'])
  }
}
