import { Routes } from '@angular/router';

// Rutas de Fase Práctica
import { CatalogoDocumentos } from './modules/fase-practica/pages/catalogo-documentos/catalogo-documentos';
import { CartaCompromiso } from './modules/fase-practica/pages/carta-compromiso/carta-compromiso';
import { RegistroAsistencia } from './modules/fase-practica/pages/registro-asistencia/registro-asistencia';

// Componentes de Portafolio Docente
import { ListaPortafolio } from './modules/portafolio-docente/pages/lista-portafolio/lista-portafolio';
import { DetallePortafolio } from './modules/portafolio-docente/pages/detalle-portafolio/detalle-portafolio';

export const routes: Routes = [
  // --- REDIRECCIÓN INICIAL ---
  // Por defecto, redirigimos al catálogo de documentos para mantener la raíz limpia
  {
    path: '',
    redirectTo: 'fase-practica',
    pathMatch: 'full'
  },

  // --- RUTAS DE FASE PRÁCTICA ---
  {
    path: 'fase-practica',
    component: CatalogoDocumentos
  },
  {
    path: 'fase-practica/carta-compromiso',
    component: CartaCompromiso
  },
  {
    path: 'fase-practica/registro-asistencia',
    component: RegistroAsistencia
  },
  
  // --- RUTAS DE PORTAFOLIO DOCENTE ---
  {
    path: 'portafolio',
    component: ListaPortafolio
  },
  {
    path: 'portafolio/detalle',
    component: DetallePortafolio
  },
  {
    path: 'portafolio-docente',
    loadComponent: () =>
      import('./modules/portafolio-docente/pages/detalle-portafolio/informe-final.component').then(
        (m) => m.InformeFinalComponent,
      ),
  },
  {
    path: 'aceptacion-notas',
    loadComponent: () =>
      import('./modules/portafolio-docente/pages/aceptacion-notas/aceptacion-notas.component').then(
        (m) => m.AceptacionNotasComponent,
      ),
  },

  // --- RUTAS DE VINCULACIÓN ---
  {
    path: 'vinculacion',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./modules/vinculacion/pages/lista-vinculacion/lista-vinculacion.component')
            .then(m => m.ListaVinculacionComponent)
      },
      {
        path: 'nuevo',
        loadComponent: () =>
          import('./modules/vinculacion/pages/nuevo-vinculacion/nuevo-vinculacion.component')
            .then(m => m.NuevoVinculacionComponent)
      },
      {
        path: 'actividades',
        loadComponent: () =>
          import('./modules/vinculacion/pages/actividades-vinculacion/actividades-vinculacion.component')
            .then(m => m.ActividadesVinculacionComponent)
      },
      {
        path: 'asistencia',
        loadComponent: () =>
          import('./modules/vinculacion/pages/asistencia-tutor/asistencia-tutor.component')
            .then(m => m.AsistenciaTutorComponent)
      },
      {
        path: 'informes',
        loadComponent: () =>
          import('./modules/vinculacion/pages/informes-vinculacion/informes-vinculacion.component')
            .then(m => m.InformesVinculacionComponent)
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./modules/vinculacion/pages/detalle-vinculacion/detalle-vinculacion.component')
            .then(m => m.DetalleVinculacionComponent)
      }
    ]
  },

  // El comodín de redirección SIEMPRE debe ir al último para que no capture las rutas buenas antes de tiempo
  {
    path: '**',
    redirectTo: 'fase-practica'
  }
];