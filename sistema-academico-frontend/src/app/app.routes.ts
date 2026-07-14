import { Routes } from '@angular/router';

// Rutas de Fase Práctica
import { CatalogoDocumentos } from './modules/fase-practica/pages/catalogo-documentos/catalogo-documentos';
import { CartaCompromiso } from './modules/fase-practica/pages/carta-compromiso/carta-compromiso';
import { RegistroAsistencia } from './modules/fase-practica/pages/registro-asistencia/registro-asistencia';

// TODO: Importa aquí tus componentes de Portafolio Docente desde sus carpetas reales
import { ListaPortafolio } from './modules/portafolio-docente/pages/lista-portafolio/lista-portafolio';
import { DetallePortafolio } from './modules/portafolio-docente/pages/detalle-portafolio/detalle-portafolio';

export const routes: Routes = [
  // --- RUTAS DE FASE PRÁCTICA ---
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
  
  // --- RUTAS DE PORTAFOLIO DOCENTE (DESDE HEAD) ---
  {
    path: 'portafolio',
    component: ListaPortafolio
  },
  {
    path: 'portafolio/detalle',
    component: DetallePortafolio
  },

  // --- RUTAS DE PORTAFOLIO DOCENTE (DESDE MAIN) ---
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

  // El comodín de redirección SIEMPRE debe ir al último para que no capture las rutas buenas
  {
    path: '**',
    redirectTo: ''
  }
];