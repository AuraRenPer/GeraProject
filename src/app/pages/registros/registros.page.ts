import { Component } from '@angular/core';
import { RegistroService } from 'src/app/core/registro.service';
import { Registro } from 'src/app/models/registro.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registros',
  standalone: false,
  templateUrl: './registros.page.html',
})
export class RegistrosPage {
  registros: Registro[] = [];

  constructor(
    private registroService: RegistroService,
    private router: Router,
    private alertCtrl: AlertController
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
    const alerta = await this.alertCtrl.create({
      header: '¿Eliminar?',
      message: '¿Estás seguro de que quieres eliminar este registro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: async () => {
            await this.registroService.delete(id);
            this.cargarRegistros(); // Actualiza la lista
          }
        }
      ]
    });

    await alerta.present();
  }
}
