import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Registro } from '../models/registro.model';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RegistroService {
  private storeName = 'registros';

  constructor(private dbService: NgxIndexedDBService) {}

  getAll(): Promise<Registro[]> {
    return firstValueFrom(this.dbService.getAll(this.storeName));
  }
  
  getById(id: number): Promise<Registro | undefined> {
    return firstValueFrom(this.dbService.getByKey(this.storeName, id));
  }
  
  add(registro: Omit<Registro, 'id'>): Promise<number> {
    return firstValueFrom(this.dbService.add(this.storeName, {
      ...registro,
      fecha: new Date().toISOString()
    })).then(result => result.id);
  }
  
  update(registro: Registro): Promise<any> {
    return firstValueFrom(this.dbService.update(this.storeName, {
      ...registro,
      fecha: new Date().toISOString()
    }));
  }
  
  delete(id: number): Promise<any> {
    return firstValueFrom(this.dbService.delete(this.storeName, id));
  }
  
}
