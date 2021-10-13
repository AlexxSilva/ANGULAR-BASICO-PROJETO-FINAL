/**
 * Serviço responsavel por executar as operações da calculadora
 * @author Alex Silva de Moura
 * @since 1.0.0
 */


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /*Define constantes utilizadas para identificar as operações de calculo*/
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }


  calcular(num1: number, num2: number, operacao:string) : number { 
    let resultado: number; // Armazena o resultado da operação

    switch(operacao)
    {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
        case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
        case CalculadoraService.DIVISAO:
          resultado = num1 / num2;
          break;
          case CalculadoraService.MULTIPLICACAO:
            resultado = num1 * num2;
            break;
            default:
              resultado= 0;
    } 
    return resultado;
  }
}
