import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidaService {


  validaDec(numero: string): boolean {

    if (!this.apenasNumeros(numero)) {
      return false;
    }

    return true;
  }

  validaBin(numero: string): boolean {
    if (!this.apenasNumeros(numero)) {
      return false;
    }

    for (let i = 0; i < numero.length; i++) {
      if ((numero.charAt(i) != '1') && (numero.charAt(i) != '0')) {
        return false;
      }
    }

    return true;
  }

  validaOct(numero: string): boolean {

    if (!this.apenasNumeros(numero)) {
      return false;
    }

    for (let i = 0; i < numero.length; i++) {
      const digito = Number.parseInt(numero.charAt(i));

      if (digito > 7 || digito < -7) {
        return false;
      }
    }

    return true;
  }

  validaHex(numero: string): boolean {

    const letras: string[] | null = numero.match(/[a-zA-Z]/g);

    if (letras != null) {
      for (let i = 0; i < letras!.length; i++) {
        let digito: string = letras[i];

        if (!/^[a-fA-F]$/.test(digito)) {
          return false;
        }
      }
    }

    return true;
  }

  apenasNumeros(numero: string): boolean {
    return /^\d+$/.test(numero.trim());
  }
}
