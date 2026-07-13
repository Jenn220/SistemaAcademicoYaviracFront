import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'vinculacion',
    pathMatch: 'full'
  },

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
  }
];