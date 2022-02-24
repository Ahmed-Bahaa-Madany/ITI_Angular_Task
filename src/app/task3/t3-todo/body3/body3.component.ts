import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-body3',
  templateUrl: './body3.component.html',
  styleUrls: ['./body3.component.scss']
})
export class Body3Component implements OnInit {

  @Input() public dataFromParent: any;
  constructor() { }

  ngOnInit(): void {

  }

  deleteItem(i: number) {
    this.dataFromParent.splice(i, 1)
  }
  markItem(i: number) {
    this.dataFromParent[i].marked = true
  }

}
