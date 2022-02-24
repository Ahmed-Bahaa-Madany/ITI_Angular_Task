import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t2-content',
  templateUrl: './t2-content.component.html',
  styleUrls: ['./t2-content.component.scss']
})
export class T2ContentComponent implements OnInit {
  useAvater : string = "../../../assets/pp.jpg"
  head : string = "Lorem, ipsum dolor sit amet consectetur adipisicing."
  paragraph :string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aliquid molestiae atque dicta!"
  contents : string[]=["","",""]
  constructor() { }

  ngOnInit(): void {
  }

}
