import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spring',
  templateUrl: './spring.page.html',
  styleUrls: ['./spring.page.scss'],
})
export class SpringPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("시작띠");
  }

}
