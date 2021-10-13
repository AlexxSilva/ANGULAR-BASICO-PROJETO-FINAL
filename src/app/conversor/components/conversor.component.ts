import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import {Moeda, Conversao, ConversaoResponse} from '../models';
import { MoedaService, ConversorService } from '../services';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  moedas: Moeda[] = [];
  conversao: any;
  possuiErro: boolean = false;
  conversaoResponse: any;
  
  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm | undefined;

  constructor(private moedaService: MoedaService,
    private conversorservice: ConversorService) { }

  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  init(): void {
    this.conversao = new Conversao('USD', 'BRL', 0);
    this.possuiErro = false;
  }

  converter(): void
  {
    if (this.conversaoForm?.form.valid)
    {
      this.conversorservice
      .converter(this.conversao)
      .subscribe(
        (response) => {
          this.conversaoResponse = response;
          this.possuiErro = response.error ? true : false;
        },
        error => this.possuiErro = true
      )
    }
  }
}
