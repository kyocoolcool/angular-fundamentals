import {Component, OnInit} from '@angular/core';
import {RequestService} from '../../../RxJS/services/request.service';
import {Observable, fromEvent} from 'rxjs';
import {map, filter, throttleTime} from 'rxjs/operators';


@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {

  constructor(public request: RequestService) {
  }

  ngOnInit() {
    /**同步獲取數據*/
    let data = this.request.getData();
    console.log(data);
    /**代入方法操作*/
    this.request.getName(cd => {
      console.log(cd);
    });
    /**CallBack異步獲取數據*/
    this.request.getCallBack((cb) => {
      console.log(cb);
    });
    /**Promise異步獲取數據*/
    let promiseDat = this.request.getPromiseData();
    promiseDat.then((data) =>
      console.log(data));
    /**Rxjs異步獲取數據*/
    let rxjsData = this.request.getRxjsData();
    var d = rxjsData.subscribe((data2) => {
      console.log(data2);
    })
    /**Rxjs可以取消訂閱*/
    setTimeout(() => {
      d.unsubscribe();
    }, 1000);
    /**Promise多次執行(不支援)*/
    let promiseIntervalDat = this.request.getIntervalPromiseData();
    promiseIntervalDat.then((data) =>
      console.log(data));
    /**Rxjs多次執行*/
    let rxjsIntervalData = this.request.getIntervalRxjsData();
    rxjsIntervalData.subscribe((data2) => {
      console.log(data2);
    })
    /**利用工具方法filter來處理返回的數據*/
    // let streamNum = this.request.getIntervalRxjsNum();
    // streamNum.pipe(
    //   filter((value:number) => {
    //     if (value %2 == 0) {
    //     return true;
    //   }
    // })
    // ).subscribe((data)=>{
    //   console.log(data)
    // })
    /**利用工具方法map來處理返回的數據*/
    // let streamNum = this.request.getIntervalRxjsNum();
    // streamNum.pipe(
    //   map((value:number) => {
    //       return value*value;
    //   })
    // ).subscribe((data)=>{
    //   console.log(data)
    // })
    /**利用工具方法filter,map並用來處理返回的數據*/
    let streamNum = this.request.getIntervalRxjsNum();
    streamNum.pipe(
      filter((value: number) => {
        if (value % 2 == 0) {
          return true;
        }
      })
      , map((value: number) => {
        return value * value;
      })
    ).subscribe((data) => {
      console.log(data)
    })
    /**Rxjs延遲執行過5秒才能再按*/
    let button = document.querySelector('button');
    fromEvent(button, 'click').pipe(throttleTime(5000))
      .subscribe(() => console.log('clicked'))

  }

}
