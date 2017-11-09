import { Component, OnInit } from '@angular/core';
import { Objeto } from '../modelos/objeto.modelo';

@Component({
  selector: 'app-data-binding-interpolacion-y-property-binding',
  templateUrl: './data-binding-interpolacion-y-property-binding.component.html',
  styleUrls: ['./data-binding-interpolacion-y-property-binding.component.css']
})
export class DataBindingInterpolacionYPropertyBindingComponent implements OnInit {

  textoInterpolacion = '{{ propiedad/objeto/expresión }}'
  textoIntepolacionObjeto = '{propiedad1:"string", propiedad2:"string", propiedad3:"number", propiedad4:"any",}'
  textoProperty = '[ atributodelelementoHTML ] = “ expresión “'
  Objeto1 = new Objeto('Propiedad #1', 'Propiedad #2', 2017, 30.55)
  indexProperty = 1
  propertyChanger = false

  constructor() { }

  funcionNumeroRandom(): number {
    var x = Math.floor((Math.random() * 10000) + 1);
    return x;}

  funcionStringRandom(numeroVeces:number): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < numeroVeces; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;}

  cambioPropiedadesInterpolacion(){
    this.Objeto1.propiedad1 = this.funcionStringRandom(12)
    this.Objeto1.propiedad2 = this.funcionStringRandom(20)
    this.Objeto1.propiedad3 = this.funcionNumeroRandom()
    this.Objeto1.propiedad4 = this.funcionStringRandom(14)}

  cambioPropiedadesProperty(){
      this.propertyChanger = !this.propertyChanger}

  ngOnInit() {}

}
