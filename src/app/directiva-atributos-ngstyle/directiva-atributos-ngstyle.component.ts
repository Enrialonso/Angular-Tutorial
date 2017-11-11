import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-directiva-atributos-ngstyle',
  templateUrl: './directiva-atributos-ngstyle.component.html',
  styleUrls: ['./directiva-atributos-ngstyle.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DirectivaAtributosNgstyleComponent implements OnInit {

  //style="font-style: italic; text-align: center;"

  textoDirectivaNgstyle = '[ngStyle]'

  varNgStyleElemento1 = ''

  varNgStyleElemento2 = ''

  varNgStyleElemento3 = ''

  constructor() { }

  ngOnInit() { }

  eventBindingMouseEntrer1(){ this.varNgStyleElemento1 = 'italic' }

  eventBindingMouseOut1(){ this.varNgStyleElemento1 = ''  }

  eventBindingMouseEntrer2(){ this.varNgStyleElemento2 = 'Tomato' }
  
  eventBindingMouseOut2(){ this.varNgStyleElemento2 = ''  }

  eventBindingMouseEntrer3(){ this.varNgStyleElemento3 = 'DodgerBlue' }
    
  eventBindingMouseOut3(){ this.varNgStyleElemento3 = ''  }

}
