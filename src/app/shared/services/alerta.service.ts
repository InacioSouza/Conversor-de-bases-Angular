import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {
  private mensagem = new BehaviorSubject<string>('');
  private exibir = new BehaviorSubject<boolean>(false);

  public obsMensagem$ = this.mensagem.asObservable();
  public obsExibir$ = this.exibir.asObservable();

  setData(dadosAlerta: any) {
    this.mensagem.next(dadosAlerta.mensagem);
    this.exibir.next(dadosAlerta.exibir);
  }
}
