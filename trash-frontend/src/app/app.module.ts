import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ModalCrearBasureroPageModule} from "./modal-crear-basurero/modal-crear-basurero.module";
import {BasureroHttpService} from "./servicios/http/basurero-http.service";
import {HttpClientModule} from "@angular/common/http";
import {ModalEditarBasureroPageModule} from "./modal-editar-basurero/modal-editar-basurero.module";
import {LocalizacionHttpService} from "./servicios/http/ubicacion-http.service";
import {TipoBasuraHttpService} from "./servicios/http/tipo-basura-http.service";
import {EstadoBasureroHttpService} from "./servicios/http/estado-basurero-http.service";
import {GoogleMap, GoogleMaps} from "@ionic-native/google-maps";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
    AppRoutingModule,
    ModalCrearBasureroPageModule,
    ModalEditarBasureroPageModule,
    HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    BasureroHttpService,
    LocalizacionHttpService,
    TipoBasuraHttpService,
    EstadoBasureroHttpService,
    GoogleMaps,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
