import { Component, OnInit } from '@angular/core';
import { setAppHeight } from 'src/app/util/utils';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.css', './poems.responsive.css']
})
export class PoemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.title = 'Día de las madres - Poemas';
    setAppHeight(3, document.getElementById('app') as HTMLElement);
  }

}
