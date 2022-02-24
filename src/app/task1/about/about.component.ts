import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  info:string="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ipsam quia eligendi, asperiores excepturi cupiditate velit perspiciatis numquam eos eaque. Dolores enim corporis perspiciatis possimus facilis cupiditate beatae natus quos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non tenetur vitae fugiat deserunt omnis quo? Modi, fugit pariatur, temporibus blanditiis numquam id earum eligendi porro velit cupiditate, molestias aliquid repudiandae?"
  constructor() { }

  ngOnInit(): void {
  }

}
