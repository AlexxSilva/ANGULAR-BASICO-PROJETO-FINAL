import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados=[
    ['Janeiro', 33],
    ['Fevereiro', 33],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27]
  ];

  constructor() { }

  obterDados(): Observable<any>{
    return new Observable(observable=>{
      observable.next(this.dados);
      observable.complete();
    })
  }

}
