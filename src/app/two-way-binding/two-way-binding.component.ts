import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  textoTwoWayBinding = '[( directiva )] = “nombredelapropiedad”'
  textoTextInputTwoWayBinding = ''

  constructor() { }

  ngOnInit() {
  }

}
