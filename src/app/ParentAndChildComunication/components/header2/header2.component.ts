import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
  @Input() title: any;
  @Input() msg: any;
  @Input() run: any;
  /**將Home組建整個傳給子組建*/
  @Input() home:any;
  constructor() { }

  ngOnInit() {
  }

  getParentMsg() {
    // console.log(this.msg);
    console.log(this.home.msg);
  }

  getParentRun() {
    // this.run();
    this.home.run();
  }
}
