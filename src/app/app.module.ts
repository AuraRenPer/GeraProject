import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';

const dbConfig: DBConfig  = {
  name: 'CRUD_DB',
  version: 1,
  objectStoresMeta: [{
    store: 'registros',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'titulo', keypath: 'titulo', options: { unique: false } },
      { name: 'descripcion', keypath: 'descripcion', options: { unique: false } },
      { name: 'fecha', keypath: 'fecha', options: { unique: false } },
      { name: 'estado', keypath: 'estado', options: { unique: false } }
    ]
  }]
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgxIndexedDBModule.forRoot(dbConfig) // <- Aquí
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
