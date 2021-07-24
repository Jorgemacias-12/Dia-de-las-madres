import { Component, OnInit } from '@angular/core';
import { setAppHeight } from 'src/app/util/utils';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css', './jokes.responsive.css']
})
export class JokesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.title = 'Día de las madres - Chistes';
    setAppHeight(2, document.getElementById('app') as HTMLElement);
  }

}
