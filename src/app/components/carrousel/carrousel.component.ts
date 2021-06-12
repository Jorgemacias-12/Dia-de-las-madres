import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

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
export class CarrouselComponent implements OnInit {

  index: number = 0;

  state: string = 'false';

  paths = [
    "../../../assets/1.jpg",
    "../../../assets/2.jpg",
    "../../../assets/3.jpg",
    "../../../assets/4.jpg",
  ]

  constructor() { }

  ngOnInit(): void {
  }

  activateControls(value: string) {
    this.state = value;
  }

  counter: number = 0;

  prevImage() {
    this.index--;
    if (this.index < 0) {
      this.index = this.paths.length - 1;
    }
    let imageElement = document.getElementById("image") as HTMLImageElement;
    imageElement.src = this.paths[this.index];
  }

  nextImage() {
    this.index++;
    if (this.index >= this.paths.length) {
      this.index = 0;
    }
    let imageElement = document.getElementById("image") as HTMLImageElement;
    imageElement.src = this.paths[this.index];
  }


}
