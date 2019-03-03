import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  // google maps zoom level
  zoom: number = 15;

  // initial center position for the map
  lat: number = 50.589432;
  lng: number = 27.614063;

  constructor() { }

  ngOnInit() {
  }

}
