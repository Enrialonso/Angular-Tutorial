import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  eventBindingMouseEnterVar = 0
  eventBindingMouseDownVar = 0
  eventBindingKeyPressVar = ''
  eventBindingFocusVar = ''

  constructor() { }

  eventBindingClick(){
    alert('Desencadenastes el evento Click en el "Elemento HTML"')
  }
  eventBindingCopy(){
    alert('Desencadenastes el evento Copy en el "Elemento HTML"')
  }

  eventBindingMouseEnter(){
      this.eventBindingMouseEnterVar = this.eventBindingMouseEnterVar + 1
  }

  eventBindingMouseDown(){
      this.eventBindingMouseDownVar = this.eventBindingMouseDownVar + 1
  }

  eventBindingKeyPress($event){
      this.eventBindingKeyPressVar = $event.key
  }

  eventBindingFocus(){
    this.eventBindingFocusVar = 'Get Focus'
  }

  eventBindingBlur(){
    this.eventBindingFocusVar = ''
  }

  ngOnInit() { }

}
