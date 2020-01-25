import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {count} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() {
  }

  /**同步方法*/
  getData() {
    return 'this is data';
  }

  getName(id){
    let name = '王武';
    id(name);
  }

  /**異步獲取數據回調函數*/
  getCallBack(cb) {
    setTimeout(() => {
      let name = '張三';
      cb(name);
    }, 1000);
  }

  getPromiseData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let name = '張三--Promise';
        resolve(name);
      }, 1000);
    })
  }

  getRxjsData() {

    return new Observable((xxx) => {
      setTimeout(() => {
        let name = '張三--Rxjs';
        xxx.next(name);
      }, 3000);
    })
  }

  getIntervalPromiseData() {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        let name = '張三--IntervalPromise';
        resolve(name);
      }, 1000);
    })
  }

  getIntervalRxjsData() {

    return new Observable((xxx) => {
      setInterval(() => {
        let name = '張三--IntervalRxjs';
        xxx.next(name);
      }, 3000);
    })
  }

  getIntervalRxjsNum() {

    return new Observable((xxx) => {
      let count=0
      setInterval(() => {
        count++;
        xxx.next(count);
      }, 2000);
    })
  }
}
