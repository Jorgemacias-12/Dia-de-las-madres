import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css', './jokes.responsive.css']
})
export class JokesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.title = 'Día de las madres - Chistes';
  }

}
