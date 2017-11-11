import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas-atributos',
  templateUrl: './directivas-atributos.component.html',
  styleUrls: ['./directivas-atributos.component.css']
})
export class DirectivasAtributosComponent implements OnInit {

  textoDirectivaNgModel = '[(ngModel)]'

  TextoFormularioNgModel: string = '';
  
3   
  constructor() { }

  setValue() { this.TextoFormularioNgModel = 'Ejemplo'; }

  ngOnInit() {
  }

}
