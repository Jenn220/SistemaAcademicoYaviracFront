import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'portafolio-docente',
    loadComponent: () =>
      import('./modules/portafolio-docente/pages/detalle-portafolio/informe-final.component').then(
        (m) => m.InformeFinalComponent,
      ),
  },
];