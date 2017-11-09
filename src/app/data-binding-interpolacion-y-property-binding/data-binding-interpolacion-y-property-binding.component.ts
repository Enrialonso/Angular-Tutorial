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

  cambioPropiedadesInterpolacion(){
    this.Objeto1.propiedad1 = "Propiedad #1 Cambiada"
    this.Objeto1.propiedad2 = "Propiedad #2 Modificada"
    this.Objeto1.propiedad3 = 1690
    this.Objeto1.propiedad4 = "Ahora es String"
  }

  cambioPropiedadesProperty(){
      console.log(this.propertyChanger)
      this.propertyChanger = !this.propertyChanger
      console.log(this.propertyChanger)
  }

  ngOnInit() {
  }

}
