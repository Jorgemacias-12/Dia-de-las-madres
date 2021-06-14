import { AfterViewInit, Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css', './index.responsive.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.title = 'Día de las madres - Inicio';
    let imageElement = document.getElementById('index-image') as HTMLImageElement;
    imageElement.src = environment.imageBaseURL+"/mama.jpg";
    imageElement.alt = 'Foto de mi madre en una fiesta';
  }
}
