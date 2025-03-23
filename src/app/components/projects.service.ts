import { Injectable } from '@angular/core';
import { Trabajos } from '../trabajos';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  protected listaTrabajos: Trabajos[]=[
    {
      nombre: 'Simulador Predial',
      herramientas: 'ANGULAR 15, Figma, Illustrator, Postman, Consumo de APIs, GitHub',
      descripcion: 'Sistema web para uso del Instituto Registral y Catastral del Estado de Puebla, que permite al personal autorizado realizar revaluaciones prediales con base en tasas e incrementos definidos. El sistema incluye funciones para simular cambios en los impuestos, generar reportes con el impacto de dichos cambios y crear un padrón de cuentas revaluadas en formato Excel, facilitando la gestión y actualización del padrón predial.',
      actividades: ['Toma de requerimientos','Presentación de proyecto','Creación de logo, fondo, paleta de colores e iconos en Illustrator','Diseño de prototipo en Figma','Implementación en Angular15','Consumo de APIs en Postman', 'Gestión de versiones en GitHub'],
      imagen: 'assets/sipre.png',
      urlGit: 'https://github.com/MoniLopez/SIPRE.git',
      urlFigma: 'https://www.figma.com/proto/8TzOBh8s9r0eUacpZDtc9w/SIPRE?node-id=53-960&starting-point-node-id=1%3A553'
    },
    {
      nombre: 'Visor Registral Optimizado',
      herramientas: 'ANGULAR 15, FIGMA, Illustrator, GitHub',
      descripcion: 'Sistema web para el Registro Público de la Propiedad, permitiendo la búsqueda guiada de inscripciones y sus apéndices mediante criterios como oficina, tipo de documento, libros y años. El sistema facilita la localización precisa de documentos, mostrando los resultados en formatos .pdf, .jpg o .png. El proyecto quedó en fase de codificación del frontend, sin consumo de APIs.',
      actividades:['Toma de requerimientos','Presentación de proyecto','Creación de logo, fondo, paleta de colores e iconos en Illustrator','Diseño de prototipo en Figma','Implementación en Angular15', 'Gestión de versiones en GitHub'],
      imagen: 'assets/viro.png',
      urlGit: 'https://github.com/MoniLopez/ViRO15.git',
      urlFigma: 'https://www.figma.com/proto/gwonAhIfPhvPLYUYcCFyiG/visorWeb?node-id=56-70&t=0WRlDSYU1yDi3diI-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
    },
    {
      nombre: 'Gestor Universal de Sistemas',
      herramientas: 'FIGMA, Illustrator',
      descripcion: 'Colaboración en el Sistema web centralizado para administrar usuarios, perfiles y accesos en múltiples plataformas. Este sistema permite la gestión unificada de credenciales y configuraciones, optimizando el control de permisos y la administración de sistemas',
      actividades:['Toma de requerimientos','Creación de logo, fondo, paleta de colores e iconos en Illustrator','Diseño de prototipo en Figma'],
      imagen: 'assets/gusit.png',
      urlFigma:'https://www.figma.com/proto/Fv1IeYzuKVj2SKjmOuiBos/G-Usit-Correcto?node-id=2-3&p=f&t=G3Gqb4qSUdgf36ZU-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A3'
    },
    {
      nombre: 'Citas y Turno',
      herramientas: 'FIGMA, Illustrator',
      descripcion: 'Sistema web destinado a los usuarios de catastro, el personal de la oficina central y delegaciones. El sistema permitirá la solicitud de citas y la gestión de la atención en ventanilla, con el objetivo de acelerar el proceso y disminuir los tiempos de espera. Debido a causas internas el proyecto se quedó en la fase de diseño y no continuó',
      actividades: ['Toma de requerimientos','Creación de logo, fondo, paleta de colores e iconos en Illustrator','Diseño de prototipo en Figma'],
      imagen: 'assets/citas.png',
      urlFigma: 'https://www.figma.com/proto/VFwpjWaO9G6OO59PWW7Y1K/citas?node-id=2-2&p=f&t=fSluZExsIAnthRBo-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2'
    },
    {
      nombre:'Calculadora de Valuación Territorial',
      herramientas: 'SQL Server, C#',
      descripcion: 'Colaboración en el Sistema web de valuación catastral, que permite a los notarios autorizados calcular el valor aproximado de las propiedades. Los procedimientos almacenados manejan la captura y procesamiento de datos del terreno, las construcciones y otros factores de valorización, mientras que los servicios WCF facilitan la integración de estos cálculos con la interfaz del sistema. Todo ello, respetando la normativa de valuación catastral.',
      actividades: ['Procedimientos Almacenados','Servicios Web WCF'],
      imagen: 'assets/cavat.png'
    }
  ]

  getAllListaTrabajos(): Trabajos[]{
    return this.listaTrabajos;
  }
  getProjectDetail (nombre: string): Trabajos | undefined {
    return this.listaTrabajos.find((trabajos) => trabajos.nombre == nombre);
  }
}
