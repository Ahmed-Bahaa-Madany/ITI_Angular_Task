import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillList:any[]=[
    {name:'Html',value:"width:90%;height:100%;"},
    {name:'Css',value:"width:80%;height:100%;"},
    {name:'Javascript',value:"width:85%;height:100%;"},
    {name:'React',value:"width:60%;height:100%;"},
    {name:'Photoshop',value:"width:40%;height:100%;"},
    {name:'Adobe XD',value:"width:60%;height:100%;"},
    {name:'Node.js',value:"width:70%;height:100%;"},
    {name:'WordPress',value:"width:20%;height:100%;"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
