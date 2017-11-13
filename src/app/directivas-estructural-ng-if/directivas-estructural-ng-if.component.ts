import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-directivas-estructural-ng-if',
  templateUrl: './directivas-estructural-ng-if.component.html',
  styleUrls: ['./directivas-estructural-ng-if.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DirectivasEstructuralNgIfComponent implements OnInit {

  textoDirectivaNgIF = '*ngIf=”expresión/propiedad/metodo”'

  TextoFormularioNgIF = ''

  TextoFormularioNgIF2 = ''

  constructor() { }

  ngOnInit() { }

  setResultado(){ if(this.TextoFormularioNgIF2 == 'Angular'){ return true}}

}
