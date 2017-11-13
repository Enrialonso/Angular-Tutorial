import { Component, OnInit, ViewEncapsulation, HostListener, ElementRef, Directive } from '@angular/core';

@Component({
  selector: 'app-directiva-atributo-ngclass',
  templateUrl: './directiva-atributo-ngclass.component.html',
  styleUrls: ['./directiva-atributo-ngclass.component.css'],
  encapsulation: ViewEncapsulation.None
})

@Directive({ selector: '[directivaPropia]' })

export class DirectivaAtributoNgclassComponent implements OnInit {

  textoDirectivaNgClass = '[ngClass]="Clases CSS"'

  varNgClassElemento1 = 'card-title'

  varNgClassElemento2 = 'card-title'

  varNgClassElemento3 = 'card-title'

  constructor() { }
  ngOnInit() { }

  eventBindingMouseEntrer1(){ this.varNgClassElemento1 = 'card-title text-muted'}

  eventBindingMouseOut1(){ this.varNgClassElemento1 = 'card-title' }

  eventBindingMouseEntrer2(){ this.varNgClassElemento2 = 'card-title text-danger'}

  eventBindingMouseOut2(){ this.varNgClassElemento2 = 'card-title' }

  eventBindingMouseEntrer3(){ this.varNgClassElemento3 = 'card-title text-uppercase'}
  
  eventBindingMouseOut3(){ this.varNgClassElemento3 = 'card-title' }
}
