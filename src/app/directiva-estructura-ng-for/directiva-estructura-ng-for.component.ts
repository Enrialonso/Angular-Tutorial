import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-directiva-estructura-ng-for',
  templateUrl: './directiva-estructura-ng-for.component.html',
  styleUrls: ['./directiva-estructura-ng-for.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DirectivaEstructuraNgForComponent implements OnInit {

  textoDirectivaNgFor = '*ngFor="let objeto/propiedad of objetos/propiedades"'

  constructor() { } 

  ngOnInit() {
  }

}
