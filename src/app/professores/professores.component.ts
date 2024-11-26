import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from "../titulo/titulo.component";

@Component({
  selector: 'app-professores',
  standalone: true,
  imports: [CommonModule, TituloComponent],
  templateUrl: './professores.component.html',
  styleUrl: './professores.component.css'
})
export class ProfessoresComponent {
  public titulo = 'Professores';

  professores = [
    {id: 1,nome:'Lauro', disciplina:'Matemática'},
    {id: 2,nome:'Roberto', disciplina:'Física'},
    {id: 3,nome:'Ronaldo', disciplina:'Português'},
    {id: 4,nome:'Misael', disciplina:'Inglês'},
    {id: 5,nome:'Alexandre', disciplina:'Programação'}
   ]
}
 