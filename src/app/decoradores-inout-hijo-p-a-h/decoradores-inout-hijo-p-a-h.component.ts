import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-decoradores-inout-hijo-p-a-h',
  templateUrl: './decoradores-inout-hijo-p-a-h.component.html',
  styleUrls: ['./decoradores-inout-hijo-p-a-h.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DecoradoresInoutHijoPAHComponent implements OnInit {

  @Input() public textoINOUTHijoPAH: String

  constructor() { }

  ngOnInit() {
  }

}
