import { Component, inject } from '@angular/core';
import { Trabajos } from '../../trabajos'; //Interface
import { ProjectsService } from '../projects.service'; //Servicio 
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  projectsService = inject(ProjectsService);

  proyecto: Trabajos | undefined;

  constructor(){
    const trabajoNombre = this.route.snapshot.params['nombre'];
    this.proyecto = this.projectsService.getProjectDetail(trabajoNombre)
    console.log(this.proyecto);
  }

}
