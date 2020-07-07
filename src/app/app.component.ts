import { Component } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';


  nombre = 'Ximena';
  nombre2 = 'JuaN AntoNio LoPEz';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle : 'Primera',
      case : '18'
    }
  };

  valordePromesa = new Promise( (resolve,reject) => {
    setTimeout(() => resolve('Llego la data!'), 3500);
  });
  fecha = new Date();

  video = 'oo3RmWcL94o';

  activar = true;


}
