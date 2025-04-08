export interface Registro {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: string;
    estado: 'activo' | 'inactivo' | 'pendiente';
  }
  