import {Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header3',
  templateUrl: './header3.component.html',
  styleUrls: ['./header3.component.scss']
})
export class Header3Component implements OnInit {

  @Output() messageEvent = new EventEmitter();
  constructor() { }

ngOnInit(): void {

}


getVal(value:string){
  this.messageEvent.emit(value)
}
}
