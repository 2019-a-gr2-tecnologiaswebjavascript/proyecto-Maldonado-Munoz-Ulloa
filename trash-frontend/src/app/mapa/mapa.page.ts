import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {
  GoogleMap, GoogleMapOptions, GoogleMaps, GoogleMapsEvent,
} from '@ionic-native/google-maps';
import {error} from "selenium-webdriver";
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage {

  map: GoogleMap;

  constructor(private googleMaps:GoogleMaps){

  }

  ionViewDidLoad(){
    this.cargarMapa();
  }

  cargarMapa(){
    let opcionesMapa :GoogleMapOptions={
      mapType:"MAP_TYPE_SATELLITE",
      controls:{
        compass:true,
        myLocationButton: true,
        zoom: true,
      },
      camera:{
        target:{
          lat: 43.0234,
          lng: 89.2342,
        },
        zoom:10
      }
    }

    this.map = this.googleMaps.create('map_canvas',opcionesMapa);
    this.map.one(GoogleMapsEvent.MAP_READY).then(
        (resultado)=>{
          console.log('mapa Listo');
        }
    ).catch((error)=> {
      console.log("error ",error);
    })
  }

}