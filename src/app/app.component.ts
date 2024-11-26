import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown'
import { AlunosComponent } from "./alunos/alunos.component";
import { ProfessoresComponent } from "./professores/professores.component";
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, AlunosComponent, ProfessoresComponent, PerfilComponent, DashboardComponent, NavComponent, BsDropdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SmartSchool';
}
