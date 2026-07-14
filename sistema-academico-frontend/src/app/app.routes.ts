import { Routes } from '@angular/router';

import { CatalogoDocumentos } from './modules/fase-practica/pages/catalogo-documentos/catalogo-documentos';
import { CartaCompromiso } from './modules/fase-practica/pages/carta-compromiso/carta-compromiso';
import { RegistroAsistencia } from './modules/fase-practica/pages/registro-asistencia/registro-asistencia';

export const routes: Routes = [
  {
    path: '',
    component: CatalogoDocumentos
  },
  {
    path: 'carta-compromiso',
    component: CartaCompromiso
  },
  {
    path: 'registro-asistencia',
    component: RegistroAsistencia
  },
  {
    path: '**',
    redirectTo: ''
  }
];