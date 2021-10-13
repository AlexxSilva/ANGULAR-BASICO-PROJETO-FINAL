import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm | undefined;
  
   
  tarefa: Tarefa = 
  {
    id:0,
    nome: '',
    concluida: false
  };
  
  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute, //obter o parametro para carregar a tarefa
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = + this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscarPorId(id);
  }

  atualizar(): void
  {
    (this.formTarefa?.form.valid)
    {
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }
}
