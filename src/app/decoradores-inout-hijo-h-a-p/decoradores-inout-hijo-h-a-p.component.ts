import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-decoradores-inout-hijo-h-a-p',
  templateUrl: './decoradores-inout-hijo-h-a-p.component.html',
  styleUrls: ['./decoradores-inout-hijo-h-a-p.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DecoradoresInoutHijoHAPComponent implements OnInit {

  textoINOUTHijoHAP:string

  constructor() { }

  ngOnInit() {
  }

}
