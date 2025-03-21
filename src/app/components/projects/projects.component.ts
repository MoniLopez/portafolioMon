import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsService } from '../projects.service'; //Servicio
import { Trabajos } from '../../trabajos';
import { ContactoComponent } from "../contacto/contacto.component"; //Interface

@Component({
  selector: 'app-projects',
  imports: [NgFor, RouterModule, ContactoComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  listaTrabajos: Trabajos[]=[];
  projectsService:ProjectsService = inject(ProjectsService);

  constructor(){
    this.listaTrabajos = this.projectsService.getAllListaTrabajos(); //Devuelve toda la lista de trabajos
  }
 
}
