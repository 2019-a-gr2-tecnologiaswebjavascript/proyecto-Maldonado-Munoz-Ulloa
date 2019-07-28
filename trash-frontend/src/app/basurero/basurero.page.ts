import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ModalCrearBasureroPage} from "../modal-crear-basurero/modal-crear-basurero.page";
import {BasureroHttpService} from "../servicios/http/basurero-http.service";

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
          //this.listarEntrenadores();
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

  editarBasurero(basurero){

  }
  eliminarBasurero(id:number){

  }


  ngOnInit() {
    this.listarBasureros()
  }

}
