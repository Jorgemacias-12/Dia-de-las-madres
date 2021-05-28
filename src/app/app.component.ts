import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  copyright_date!: string;
  greeting!: string;

  ngOnInit(): void {
    this.copyright_date =
      `
      \u00A9 Jorge Antonio Macias Zambrano ${new Date().getFullYear()}
    `;
    this.greeting = `¡Bienvenido(a)s! ${this.greet()}`;

  }

  greet(): string {
    let hour: number = new Date().getHours();
    let table: { [hour: number]: string } = {
      0: "Buenas noches",
      1: "Buenas noches",
      2: "Buenas noches",
      3: "Buenas noches",
      4: "Buenas noches",
      5: "Buenas noches",
      6: "Buenos días",
      7: "Buenos días",
      8: "Buenos días",
      9: "Buenos días",
      10: "Buenos días",
      11: "Buenos días",
      12: "Buenas tardes",
      13: "Buenas tardes",
      14: "Buenas tardes",
      15: "Buenas tardes",
      16: "Buenas tardes",
      17: "Buenas tardes",
      18: "Buenas tardes",
      19: "Buenas tardes",
      20: "Buenas noches",
      21: "Buenas noches",
      22: "Buenas noches",
      23: "Buenas noches"
    }
    return `${table[hour]}`;
  }

}
