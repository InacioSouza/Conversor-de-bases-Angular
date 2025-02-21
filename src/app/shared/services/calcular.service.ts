import { ValidaService } from './valida.service';
import { Injectable } from '@angular/core';
import { Decimal } from '../classes/Decimal';
import { Hexadecimal } from '../classes/Hexadecimal';
import { Octal } from '../classes/Octal';
import { Binario } from '../classes/Binario';
import { AlertaService } from './alerta.service';
import { DadoConversao } from '../interfaces/DadoConversao';

@Injectable({
  providedIn: 'root'
})
export class CalcularService {

  constructor(private alerta: AlertaService, private valida: ValidaService) { }

  converter(infos: DadoConversao): string {

    let resultado: string = '';

    if (infos.de == 10) {

      if (!this.valida.validaDec(infos.numero)) {
        this.alerta.setData({ mensagem: 'O número informado não é um decimal!', exibir: true });
        return '';
      }

      resultado = new Decimal().converter(infos);

    } else if (infos.de == 2) {

      if (!this.valida.validaBin(infos.numero)) {
        this.alerta.setData({ mensagem: 'O número informado não é um binário!', exibir: true });
        return '';
      }

      resultado = new Binario().converter(infos);

    } else if (infos.de == 16) {

      if (!this.valida.validaHex(infos.numero)) {
        this.alerta.setData({ mensagem: 'O número informado não é um hexadecimal!', exibir: true })
        return '';
      }
      resultado = new Hexadecimal().converter(infos);
    } else if (infos.de == 8) {

      if (!this.valida.validaOct(infos.numero)) {
        this.alerta.setData({ mensagem: 'O número informado não é um octal!', exibir: true })
        return '';
      }

      resultado = new Octal().converter(infos);
    }

    return resultado;
  }
}

