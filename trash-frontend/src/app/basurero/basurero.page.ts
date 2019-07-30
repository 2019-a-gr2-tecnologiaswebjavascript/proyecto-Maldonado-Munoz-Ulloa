import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ModalCrearBasureroPage} from "../modal-crear-basurero/modal-crear-basurero.page";
import {BasureroHttpService} from "../servicios/http/basurero-http.service";
import {ModalEditarBasureroPage} from "../modal-editar-basurero/modal-editar-basurero.page";

@Component({
  selector: 'app-basurero',
  templateUrl: './basurero.page.html',
  styleUrls: ['./basurero.page.scss'],
})
export class BasureroPage implements OnInit {

  constructor(private readonly _modalController:ModalController,
              private readonly _BasureroHttpService:BasureroHttpService) { }

  basureros: any[];

  async nuevoBasurero() {

    const modalCrearBasurero = await this._modalController.create({
      component: ModalCrearBasureroPage
    });
    modalCrearBasurero.onDidDismiss().then(() => {
          this.listarBasureros();
        }
    );
    return modalCrearBasurero.present();
  }

  listarBasureros(){
    const $basureros = this._BasureroHttpService.buscarTodos();
    $basureros.subscribe((datos)=>{
      this.basureros = datos;
      console.log(this.basureros);
    })
  }

  async editarBasurero(basurero){
    const modalEditarBasurero = await this._modalController.create({
      component:ModalEditarBasureroPage,
      componentProps: {
        basurero
      }
    });
    return await modalEditarBasurero.present();
  }

  eliminarBasurero(id:number){

    const $basureros = this._BasureroHttpService.borrar(id);
    $basureros.subscribe(((value) => {
      this.listarBasureros();
    }),(error)=>{
      console.log("error ",error);
    });

  }


  ngOnInit() {
    this.listarBasureros()
  }

}
