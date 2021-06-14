
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css', 'carrousel.responsive.css'],
  animations: [
    trigger('controls', [
      state('inactive', style({
        opacity: 0,
        transform: 'translateY(-10%)',
      })),
      state('active', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('inactive => active', animate('0.5s')),
      transition('active => inactive', animate('0.3s'))
    ])
  ]
})
export class CarrouselComponent implements OnInit{

  imageElement!: HTMLImageElement;

  index: number = 0;

  state: string = 'false';

  paths = [
    environment.imageBaseURL+'/1.jpg',
    environment.imageBaseURL+'/2.jpg',
    environment.imageBaseURL+'/3.jpg',
    environment.imageBaseURL+'/4.jpg',
  ]

  constructor() { }

  activateControls(value: string) {
    this.state = value;
  }

  counter: number = 0;

  prevImage() {
    this.index--;
    if (this.index < 0) {
      this.index = this.paths.length - 1;
    }
    this.imageElement.src = this.paths[this.index];
  }

  nextImage() {
    this.index++;
    if (this.index >= this.paths.length) {
      this.index = 0;
    }
    this.imageElement.src = this.paths[this.index];
  }

  ngOnInit() {
    this.imageElement = document.getElementById('image') as HTMLImageElement;
    this.imageElement.src = environment.imageBaseURL + "/1.jpg";
  }

}
