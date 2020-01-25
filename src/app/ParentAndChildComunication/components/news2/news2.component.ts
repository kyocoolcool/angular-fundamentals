import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news2',
  templateUrl: './news2.component.html',
  styleUrls: ['./news2.component.css']
})
export class News2Component implements OnInit {
  @ViewChild('footer2',{static: false}) footer2: any;

  constructor() { }

  ngOnInit() {
  }

  getSubMsg() {
    console.log(this.footer2.msg);
  }
  getSubRun() {
    this.footer2.run();
  }

  run(e) {
    console.log(e);
    alert('我是父組件Run方法');
  }

}
