import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  public title: string = '首頁標題';
  public msg: string = 'a father msg';
  constructor() { }

  ngOnInit() {

  }

  run() {
    console.log('father run method')
  }
}
