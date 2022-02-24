import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t2-header',
  templateUrl: './t2-header.component.html',
  styleUrls: ['./t2-header.component.scss']
})
export class T2HeaderComponent implements OnInit {
  useAvater : string = "../../../assets/pp.jpg"
  head : string = "Heading"
  paragraph : string = "Lorem ipsum dolor sit amet consectetur . Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nihil."
  button:string="View Details"
  contents : string[]=["","",""]
  constructor() { }

  ngOnInit(): void {
  }

}
