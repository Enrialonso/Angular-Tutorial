import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-directiva-estructura-ng-for',
  templateUrl: './directiva-estructura-ng-for.component.html',
  styleUrls: ['./directiva-estructura-ng-for.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DirectivaEstructuraNgForComponent implements OnInit {

  textoDirectivaNgFor = '*ngFor="let objeto/propiedad of objetos/propiedades"'

  textoObjetoNgFor0 = 'Objeto: "Tienda" :' 
  textoObjetoNgFor1 = '[ {item: "Disco duro", marca: "Maxtor", cantidad: "40", precio: "50"},'
  textoObjetoNgFor2 =  '{item: "Unidad DVD", marca: "LG", cantidad: "12", precio: "42"},'
  textoObjetoNgFor3 =  '{item: "Mother Board", marca: "Asus", cantidad: "30", precio: "87"},'
  textoObjetoNgFor4 =  '{item: "Case", marca: "Thermaltake", cantidad: "5", precio: "60"},'
  textoObjetoNgFor5 =  '{item: "SSD", marca: "Intel", cantidad: "10", precio: "112"} ]'
                
  ObjetoNgFor = [ {item: "Disco duro", marca: "Maxtor", cantidad: 40, precio: 50},
                  {item: "Unidad DVD", marca: "LG", cantidad: 12, precio: 42},
                  {item: "Mother Board", marca: "Asus", cantidad: 30, precio: 87},
                  {item: "Case", marca: "Thermaltake", cantidad: 5, precio: 60},
                  {item: "SSD", marca: "Intel", cantidad: 10, precio: 112} ]

  constructor() { } 

  ngOnInit() {
  }

}
