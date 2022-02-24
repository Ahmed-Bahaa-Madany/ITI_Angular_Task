import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name : string ="Ahmed Bahaa"
  title : string ="Web Developer & Desginer"

  constructor() {

  }

  ngOnInit(): void {
  }

}
