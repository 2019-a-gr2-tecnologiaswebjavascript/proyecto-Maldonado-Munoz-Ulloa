import { Component, OnInit } from '@angular/core';
import {ModalController, ToastController} from "@ionic/angular";
import {BasureroHttpService} from "../servicios/http/basurero-http.service";
import {LocalizacionHttpService} from "../servicios/http/ubicacion-http.service";
import {Basurero} from "../dto/basurero";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {EstadoBasureroHttpService} from "../servicios/http/estado-basurero-http.service";
import {TipoBasuraHttpService} from "../servicios/http/tipo-basura-http.service";

@Component({
  selector: 'app-modal-crear-basurero',
  templateUrl: './modal-crear-basurero.page.html',
  styleUrls: ['./modal-crear-basurero.page.scss'],
})
export class ModalCrearBasureroPage implements OnInit {

  fkUbicacion = false;
  fkTipoBasura = false;
  fkEstadoBasurero = false;
  estadosBasurero: any;
  localiaciones:any;
  tiposBasura:any;
  nuevoBasurero = {} as Basurero;
  constructor(private readonly _modalController: ModalController,
              private readonly _toastController: ToastController,
              private readonly _basureroHttpService:BasureroHttpService,
              private readonly _LocalizacionHttpService:LocalizacionHttpService,
              private readonly _EstadoBasureroHttpService:EstadoBasureroHttpService,
              private readonly _TipoBasuraHttpService:TipoBasuraHttpService
              ) { }

  dismiss(){
    this._modalController.dismiss();
  }

  actualizarUbicacion(id){
    console.log('entra')
    this.nuevoBasurero.fkLocalizacion = id;
    this.fkUbicacion = true;
  }

  actualizarEstadoBasurero(id){
    this.nuevoBasurero.fkEstadoBasurero = id;
    this.fkEstadoBasurero = true;
  }

  actualizarTipoBasura(id){
    this.nuevoBasurero.fkTipoBasura = id;
    this.fkTipoBasura = true;
  }

  listarTipoBasura() {
    const $listarTipoBasura = this._TipoBasuraHttpService.buscarTodos();
    $listarTipoBasura.subscribe((value) => {
          this.tiposBasura = value;
        },
        (error) => {
          console.log(error);
        })
  }

  listarEstadoBasurero() {
    const $listarEstsadosBasurero = this._EstadoBasureroHttpService.buscarTodos();
    $listarEstsadosBasurero.subscribe((value) => {
          this.estadosBasurero = value;
        },
        (error) => {
          console.log(error);
        })
  }

  eligioFk(){
    return this.fkEstadoBasurero && this.fkTipoBasura && this.fkUbicacion;
  }

  listarLocalizaciones() {
    const $listarUbicaciones = this._LocalizacionHttpService.buscarTodos();
    $listarUbicaciones.subscribe((value) => {
          this.localiaciones = value;
        },
        (error) => {
          console.log(error);
        })
  }
  async presentToast(mensaje) {
    const toast = await this._toastController.create({
      message: mensaje,
      duration: 1000
    });
    toast.present();
  }

  guardarBasurero(){
    console.log(this.nuevoBasurero);
    const $guardarBasurero = this._basureroHttpService.crear(this.nuevoBasurero);
    $guardarBasurero.subscribe((value)=>{
      this.presentToast('Se creó el entrenador');
      this.dismiss();
    }, (error) => {
      this.presentToast('Existió un problema al crear el entrenador');
    });
  }
  ngOnInit() {
    this.listarEstadoBasurero();
    this.listarLocalizaciones();
    this.listarTipoBasura();
  }

}
