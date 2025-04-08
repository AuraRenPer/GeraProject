import { Component } from '@angular/core';
import { RegistroService } from 'src/app/core/registro.service';
import { Registro } from 'src/app/models/registro.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registros',
  standalone: false,
  templateUrl: './registros.page.html',
})
export class RegistrosPage {
  registros: Registro[] = [];

  constructor(
    private registroService: RegistroService,
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.cargarRegistros();
  }

  async cargarRegistros() {
    this.registros = await this.registroService.getAll();
  }

  agregar() {
    this.router.navigate(['/registros/registro-form']);
}

  editar(registro: Registro) {
    this.router.navigate(['/registros/registro-form', registro.id]);
  }

  async eliminar(id: number) {
    await this.registroService.delete(id);
    this.cargarRegistros();
  }
}
