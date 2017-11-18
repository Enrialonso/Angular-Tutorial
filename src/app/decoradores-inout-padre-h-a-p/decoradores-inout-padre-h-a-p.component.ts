import { Component, OnInit, ViewEncapsulation,Input } from '@angular/core';

@Component({
  selector: 'app-decoradores-inout-padre-h-a-p',
  templateUrl: './decoradores-inout-padre-h-a-p.component.html',
  styleUrls: ['./decoradores-inout-padre-h-a-p.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DecoradoresInoutPadreHAPComponent implements OnInit {

  @Input() textoINOUTPadreHAP:string

  constructor() { }

  ngOnInit() {
  }

}
