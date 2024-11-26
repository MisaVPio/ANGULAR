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

  professores = [{nome: 'Misael'},{nome:'Lucas'},{nome:'Fernando'}]
}
 