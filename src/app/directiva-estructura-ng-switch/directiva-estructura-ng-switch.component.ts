import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ObjetoFor } from '../modelos/ObjetoFor';

@Component({
  selector: 'app-directiva-estructura-ng-switch',
  templateUrl: './directiva-estructura-ng-switch.component.html',
  styleUrls: ['./directiva-estructura-ng-switch.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DirectivaEstructuraNgSwitchComponent implements OnInit {

  textoObjetoNgSwitch0 = '<container-element [ngSwitch]="switch_expression">'
  textoObjetoNgSwitch1 = '<some-element *ngSwitchCase="match_expression_1">...</some-element>'
  textoObjetoNgSwitch2 = '<some-element *ngSwitchCase="match_expression_2">...</some-element>'
  textoObjetoNgSwitch3 = '<some-element *ngSwitchDefault>...</some-element>'
  textoObjetoNgSwitch4 = '</container-element>'

  ObjetoDirectiva = new ObjetoFor
  
  ObjetoNgSwitch = this.ObjetoDirectiva.ObjetoDirectiva

  constructor() { }

  ngOnInit() {
  }

}
