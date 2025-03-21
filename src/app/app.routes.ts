import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
    { path:'', component: ProjectsComponent },
    { path:'details/:nombre', component: ProjectDetailComponent, title:'Detalles de proyecto'},
    { path:'contacto', component: ContactoComponent, title:'Contacto'}
];


