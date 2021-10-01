import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  markerOptions: google.maps.MarkerOptions;
  center : any;
  position : any;
  label :string;
  circleOptions: { fillColor: string; };
  circleOptions2: { fillColor: string; };
  markerOptions2: { icon: google.maps.Icon; };
  position2: { lat: number; lng: number; };
  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.position2 ={lat: 45.507338, lng: 9.190766};
    this.label = "ciao";
    this.circleOptions = {fillColor : 'red'}
    this.circleOptions2 = {fillColor : 'blue'}

    let iconData : google.maps.Icon = {
      url:'./assets/img/cat_acrobat.ico',
      scaledSize : new google.maps.Size(60,60)
    }
  
      this.markerOptions = {icon:iconData}

      let iconData2 : google.maps.Icon = {
        url:'./assets/img/download.jfif',
        scaledSize : new google.maps.Size(60,60)
      }
    
        this.markerOptions2 = {icon:iconData2}

  }
  purple(){
    this.circleOptions = {fillColor : 'purple'}
  }

  green(){
    this.circleOptions = {fillColor : 'green'}
  }
  orange(){
    this.circleOptions = {fillColor : 'orange'}
  }
  
}