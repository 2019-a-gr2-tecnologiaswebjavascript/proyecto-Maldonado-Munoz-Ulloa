import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions, Environment, Marker,
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {


  constructor() { }

  map: GoogleMap;

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    // This code is necessary for browser
        Environment.setEnv({
          'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyA9uZhZELdy9RoD0AuZ8wgtvLP_JVYzSDM',
          'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyA9uZhZELdy9RoD0AuZ8wgtvLP_JVYzSDM'
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

    let marker: Marker = this.map.addMarkerSync({
      title: 'Escuela Politécnica Nacional',
      icon: '',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }
  ngOnInit() {
    this.loadMap();
  }

}
