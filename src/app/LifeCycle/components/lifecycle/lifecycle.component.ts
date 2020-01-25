import { Component, OnInit,Input } from '@angular/core';
import {throttleTime} from "rxjs/operators";

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {
  public msg: string = 'bad';
  public userInfo:string;
  public oldUserInfo: string = '';
  @Input('title') title:string;

  constructor() {
    console.log('constructor');
  }

  ngOnChanges() {
    console.log('在ngOnint前會呼叫一次，或者是一個或多個綁定的input property發生變化時');
  }
  ngOnInit() {
    console.log('在首次ngOnChanges完成之後觸發，只會發生一次');
  }

  ngDoCheck() {
    console.log('在每個Angular檢測變化的周期中呼叫，最快會發生在首次ngOnChanges和ngOnInit之後');
    if(this.userInfo==this.oldUserInfo){
      console.log('數據沒有變化');
    }
    else {
      console.log(`數據從${this.oldUserInfo}變為${this.userInfo}`);
      this.oldUserInfo = this.userInfo;
    }

  }

  ngAfterContentInit() {
    console.log('在首次ngDoCheck後發生，只呼叫一次');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentInit和每次NgDoCheck之後呼叫')
  }

  ngAfterViewInit() {
    console.log('在首次ngAfterContentChecked後發生，且只會呼叫一次');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewInit和每次ngAfterContentChecked之後呼叫');
    console.log(this.title);
  }

  ngOnDestroy() {
    console.log('在Angular銷毀Component及Directive前呼叫');
  }

  changeMsg() {
    this.msg = 'Good';
  }
}
