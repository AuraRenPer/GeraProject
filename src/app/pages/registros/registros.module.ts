import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { RegistrosPage } from './registros.page';
import { RegistroFormPage } from './registro-form.page';

const routes: Routes = [
  { path: '', component: RegistrosPage },
  { path: 'registro-form', component: RegistroFormPage },
  { path: 'registro-form/:id', component: RegistroFormPage },
];

@NgModule({
  declarations: [RegistrosPage, RegistroFormPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class RegistrosModule {}
