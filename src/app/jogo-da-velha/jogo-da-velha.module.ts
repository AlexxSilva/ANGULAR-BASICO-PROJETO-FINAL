import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './shared';


@NgModule({
  declarations: [
    JogoDaVelhaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    JogoDaVelhaComponent //Como não trabalha com rotas, precisa que o modulo da aplicação tenha acesso ao component.
  ],
  providers:
  [
    JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
