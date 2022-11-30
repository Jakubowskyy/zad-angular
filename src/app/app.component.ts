import { Component, VERSION } from '@angular/core';
import { Cos } from './zadanie';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}

let cos: Cos[] = [
  {
    name: 'Spr z angulara',
    koniecZadania: '2022-12-23',
    wykonane: false,
  },
  {
    name: 'Granie z kolegami',
    koniecZadania: '2022-12-13',
    wykonane: false,
  },
];
zapiszZadanie(nazwa:string,czyCos:string),{
  let cos: Cos={
    name,
     koniecZadania,
     wykonane: false,
   };
   this.Cos.push(cos);
 };
