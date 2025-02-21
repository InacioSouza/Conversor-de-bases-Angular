import { AlertaService } from 'src/app/shared/services/alerta.service';
import { CalcularService } from '../../shared/services/calcular.service';
import { Component, OnInit } from '@angular/core';
import { DadoConversao } from 'src/app/shared/interfaces/DadoConversao';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  alerta!: string;
  exibirAlerta!: boolean;

  selectDe: number = 10;
  numero: string = '';

  selectPara: number = 16;
  resposta: string = '';

  constructor(private calcula: CalcularService, private alertaServce: AlertaService) { }

  ngOnInit(): void {
    this.alertaServce.obsMensagem$.subscribe(valor => {
      this.alerta = valor;
    });

    this.alertaServce.obsExibir$.subscribe(valor => {
      this.exibirAlerta = valor;
    })
  }

  converter(): void {

    this.resposta = '';

    if (this.numero === '') {
      return;
    }

    let infos: DadoConversao = {
      de: this.selectDe, para: this.selectPara, numero: this.numero
    };

    this.resposta = this.calcula.converter(infos);
  }

  limpaResposta(select: string): void {
    this.resposta = '';

    if (select === 'de') {
      this.alertaServce.setData({ mensagem: '', exibir: false });
    }

  }

  retiraAlerta(event: any): void {
    if (event.target.value === '') {
      this.alertaServce.setData({ mensagem: '', exibir: false });
    }
  }

  limparTudo(): void{
    this.limpaResposta('');
    this.numero = '';
    this.alertaServce.setData({ mensagem: '', exibir: false });    
  }
}
