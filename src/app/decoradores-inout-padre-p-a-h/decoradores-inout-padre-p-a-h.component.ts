import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-decoradores-inout-padre-p-a-h',
  templateUrl: './decoradores-inout-padre-p-a-h.component.html',
  styleUrls: ['./decoradores-inout-padre-p-a-h.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DecoradoresInoutPadrePAHComponent implements OnInit {

  textoINOUTPadrePAH: string

  constructor() { }

  ngOnInit() {
  }

}
