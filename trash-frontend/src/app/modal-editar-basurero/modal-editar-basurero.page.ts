import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams, ToastController} from "@ionic/angular";

@Component({
  selector: 'app-modal-editar-basurero',
  templateUrl: './modal-editar-basurero.page.html',
  styleUrls: ['./modal-editar-basurero.page.scss'],
})
export class ModalEditarBasureroPage implements OnInit {

  basurero: any;
  formularioCambio = false;
  constructor(private readonly toastController:ToastController,
              private readonly _modalController:ModalController,
              private readonly _navParams:NavParams) {

    this.basurero = this._navParams.get('entrenador');
  }

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1000
    });
    toast.present();
  }

  actualizarBasurero(){

  }

  cambio() {
    this.formularioCambio = true;
  }
  dismiss() {
    this._modalController.dismiss({
      'dismissed': true
    });
  }

  ngOnInit() {
  }

}
