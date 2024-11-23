import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './professores.component.html',
  styleUrl: './professores.component.css'
})
export class ProfessoresComponent {
  titulo = 'Professores';

  professores = [{nome: 'Misael'},{nome:'Lucas'},{nome:'Fernando'}]
}
 