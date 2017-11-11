import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-directiva-atributo-ngclass',
  templateUrl: './directiva-atributo-ngclass.component.html',
  styleUrls: ['./directiva-atributo-ngclass.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DirectivaAtributoNgclassComponent implements OnInit {

  textoDirectivaNgClass = '[ngClass]'

  constructor() { }

  ngOnInit() {
  }

}
