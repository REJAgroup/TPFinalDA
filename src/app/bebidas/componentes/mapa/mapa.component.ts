import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from "mapbox-gl";


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  constructor() { }

  ngOnInit(){

      (mapboxgl as any).accessToken = environment.mapboxKey;
      const map = new mapboxgl.Map({
      container: 'mapa-mapbox', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-68.5386537,-31.5353014], // LGT , LAT 
      zoom: 15 // starting zoom
      });
      
      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl());

  }

}
