import { Routes } from '@angular/router';

// Rutas de Fase Práctica
import { CatalogoDocumentos } from './modules/fase-practica/pages/catalogo-documentos/catalogo-documentos';
import { CartaCompromiso } from './modules/fase-practica/pages/carta-compromiso/carta-compromiso';
import { RegistroAsistencia } from './modules/fase-practica/pages/registro-asistencia/registro-asistencia';

// TODO: Importa aquí tus componentes de Portafolio Docente desde sus carpetas reales
import { ListaPortafolio } from './modules/portafolio-docente/pages/lista-portafolio/lista-portafolio';
import { DetallePortafolio } from './modules/portafolio-docente/pages/detalle-portafolio/detalle-portafolio';

export const routes: Routes = [
  // Puedes dejar la raíz apuntando al catálogo de documentos o a tu dashboard principal
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
  
  // --- TUS RUTAS DE PORTAFOLIO DOCENTE ---
  {
    path: 'portafolio',
    component: ListaPortafolio
  },
  {
    path: 'portafolio/detalle',
    component: DetallePortafolio
  },

  // El comodín de redirección SIEMPRE debe ir al último para que no capture las rutas buenas
  {
    path: '**',
    redirectTo: ''
  }
];