import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent {
  titulo = 'Alunos';
 
  alunos = [
    'Marta',
    'Paula',
    'Laura',
    'Luiza',
    'Lucas',
    'Pedro',
    'Paulo']
}
