import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  paths: { [index: number]: string } = {
    0: "../../../assets/1.jpg",
    1: "../../../assets/2.jpg",
    2: "../../../assets/3.jpg",
    3: "../../../assets/4.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }
}
