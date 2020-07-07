import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): any {

    const nombres = value.split('');
    let output = '';
       // tslint:disable-next-line:forin
    if ( activar) {
    // tslint:disable-next-line:forin
    // tslint:disable-next-line:prefer-for-of
    for ( let i = 0; i < nombres.length; i++) {

          output += '*';
        }
    return output;
      } else {
          return value;
        }

  }

}
