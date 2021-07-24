import { Component, OnInit } from '@angular/core';
import { setAppHeight } from 'src/app/util/utils';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css', './song.responsive.css']
})
export class SongComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.title = 'Día de las madres - Canción';
    let videoElement = document.getElementById('video') as HTMLVideoElement;
    videoElement.src = environment.imageBaseURL+"/JoséJosé-Madrecita.mp4";
    setAppHeight(1, document.getElementById('app') as HTMLElement);
  }

}
