import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from "../titulo/titulo.component";

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [CommonModule, TituloComponent],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent {
  public titulo = 'Alunos';
 
  alunos = [
    {id: 1,nome:'Marta', sobrenome: 'Kent', telefone: 332255},
    {id: 2,nome:'Paula', sobrenome: 'Isabela', telefone: 332255},
    {id: 3,nome:'Laura', sobrenome: 'Antonia', telefone: 332255},
    {id: 4,nome:'Luiza', sobrenome: 'Maria', telefone: 332255},
    {id: 5,nome:'Lucas', sobrenome: 'Machado', telefone: 332255},
    {id: 6,nome:'Pedro', sobrenome: 'Alvares', telefone: 332255},
    {id: 7,nome:'Paulo', sobrenome: 'José', telefone: 332255}]
}
