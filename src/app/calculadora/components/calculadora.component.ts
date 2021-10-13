import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

export class CalculadoraComponent implements OnInit {

  private numero1: string = '0';
  private numero2: string = '';
  private resultado: number = 0;
  private operacao: string = '';

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
  }

limpar()
{
   this.numero1 = '0';
   this.numero2 = '';
   this.resultado = 0;
   this.operacao  = '';
}

  adicionarNumero(numero:string) : void
  {

    if(this.operacao === '')
    {
       this.numero1 = this.concatenarNumero(this.numero1, numero); 
    } else
    {
      this.numero2 = this.concatenarNumero(this.numero2, numero); 
    }
  }

concatenarNumero(numAtual:string, numContact:string) : string
{
  if(numAtual ==='0' || numAtual ==='')
  {
    numAtual = '';
  }  

  if(numContact ==='.' && numAtual ==='')
  {
    return '0.';
  }  

  if(numContact ==='.' && numAtual.indexOf('.') >-1)
  {
    return numAtual;
  } 

  return numAtual + numContact;

}


definirOperacao(operacao:string) : void{

if (this.operacao === '')
{
  this.operacao = operacao;
  return;
}

if(this.numero2 !== null)
  {
    this.resultado = this.calculadoraService.calcular(parseFloat(this.numero1),
    parseFloat(this.numero2), this.operacao);
  }

    this.operacao = operacao;
    this.numero1 = this.resultado.toString();
    this.numero1 = '';
    this.resultado = 0;
}


calcular(): void
{
  if (this.numero2 === '')
  {
    return;
  }

  this.resultado = this.calculadoraService.calcular(parseFloat(this.numero1), parseFloat(this.numero2), this.operacao);
}

get display(): string{
  if (this.resultado !== 0)
  {
    return this.resultado.toString();
  }  

  if (this.numero2 !== "")
  {
    return this.numero2;
  } 
  return this.numero1;
}
}


