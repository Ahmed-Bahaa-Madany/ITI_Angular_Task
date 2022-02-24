import { Component, OnInit,ViewChild } from '@angular/core';
import { Body3Component } from './body3/body3.component';
@Component({
  selector: 'app-t3-todo',
  templateUrl: './t3-todo.component.html',
  styleUrls: ['./t3-todo.component.scss']
})
export class T3TodoComponent implements OnInit {


    dataFromchild: Object[] = [];
    constructor() {   }

    ngOnInit(): void {
    }
    receiveMessage(newData: any) {
      let item = {name:newData , marked : false}
      this.dataFromchild.push(item)
      console.log(this.dataFromchild)
    }

}
