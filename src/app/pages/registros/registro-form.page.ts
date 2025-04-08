import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistroService } from 'src/app/core/registro.service';
import { Registro } from 'src/app/models/registro.model';

@Component({
  selector: 'app-registro-form',
  standalone: false,
  templateUrl: './registro-form.page.html',
})
export class RegistroFormPage {
  registro: Registro = {
    id: 0,
    titulo: '',
    descripcion: '',
    fecha: '',
    estado: 'activo',
  };

  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private regService: RegistroService
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      const data = await this.regService.getById(+id);
      if (data) this.registro = data;
    } else {
      this.registro.id = Date.now();
    }
  }

  async guardar() {
    if (this.isEdit) {
      await this.regService.update(this.registro);
    } else {
      await this.regService.add(this.registro);
    }
    this.router.navigate(['/registros']);
  }
}
