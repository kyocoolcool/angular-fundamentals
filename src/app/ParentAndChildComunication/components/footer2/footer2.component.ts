import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css']
})
export class Footer2Component implements OnInit {
  public msg: string = '子組建的msg';
  @Output() private out = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  run() {
    console.log('子組建的run method');
  }

  sendParentMsg() {
    this.out.emit('我是子組建的數據');
  }
}
