import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions, Environment, Marker,
} from '@ionic-native/google-maps';
import {BasureroHttpService} from "../servicios/http/basurero-http.service";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {


  basureros: any;
  constructor(private readonly _BasureroHttpService:BasureroHttpService, private readonly _toastController:ToastController) { }

  map: GoogleMap;

  ionViewDidLoad() {
    this.loadMap();
  }

  listarBasureros() {
    const $basureros = this._BasureroHttpService.buscarTodos();
    $basureros.subscribe((datos) => {
      this.basureros = datos;
      this.basureros.forEach((basurero) =>
          this.anadirMarker(basurero.tagBasurero,basurero.fkEstadoBasurero.nombreEstado,basurero.fkLocalizacion));

    })
  }

  loadMap() {

    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBCWLLkNhv7ecVJSs1EFkSA_HXaGSa-Ris',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBCWLLkNhv7ecVJSs1EFkSA_HXaGSa-Ris'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: -0.210058,
          lng: -78.488498
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
  }

  anadirMarker(tagBasurero,estado,localizacion){

    let url='';
    if(estado==='Lleno'){
      url = './../../assets/basurero-lleno.svg'
    }else{
      url = './../../assets/basurero-vacio.svg'
    }

    let marker: Marker = this.map.addMarkerSync({
      title: tagBasurero,
      icon:{
        url:url,
        size: {
          width: 32,
          height: 24
        }
      },
      animation: 'DROP',
      position: {
        lat: localizacion.latitudLocalizacion,
        lng: localizacion.longitudLocalizacion
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      this.presentToast(`El basurero ${tagBasurero} esta ${estado.toLowerCase()}`)
    });

  }

  async presentToast(mensaje) {
    const toast = await this._toastController.create({
      message: mensaje,
      duration: 1000
    });
    toast.present();
  }

  ngOnInit() {
    this.listarBasureros();
    this.loadMap();
  }

}