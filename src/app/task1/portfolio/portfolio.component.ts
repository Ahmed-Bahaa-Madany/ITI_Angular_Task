import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  // portf : string [] = ['WEB DESIGN','MOBILE DESIGN','LOGO DESIGN']

  portf : any [] = [
    {name:'WEB DESIGN',value:'white'},
    {name:'MOBILE DESIGN',value:'dark'},
    {name:'LOGO DESIGN',value:'white'}
  ]

  // portfol : string [] = ['WEB APPLICATION','MOBILE APPLICATION','PWA']

  portfol : any [] = [
    {name:'WEB APPLICATION',value:'dark'},
    {name:'MOBILE APPLICATION',value:'white'},
    {name:'PWA',value:'dark'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
