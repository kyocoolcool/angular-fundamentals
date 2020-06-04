import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  /** 屬性操作 */
  public message: any;
  public message2 = '晚安';
  public list2: any[] = [];
  public classStr:string = 'bgBlue active';
  public classObj={
    bgBlue:true,
    active:false
  }
  isShow = true;
  classArr = ['aaa', 'bgBlue', 'ccc'];
  styleStr = "background:black";

  constructor() {
    this.message = '這是構造賦值';
  }

  /** 屬性對象操作 */
  public userInfo: User = {
    name: '張三',
    age: '20'
  };


  /** 操作標籤屬性 */
  public content = '<h1>包含html標籤</h1>';

  /** 定義數組1 */
  public arr2 = ['123', 456, '789'];
  /** 定義數組2 */
  public arr: Array<string> = ['Taiwan', 'America', 'Hong Kong', 'China'];
  /** 定義數組3 */
  public list: any[] = ['Chris', 3456, 'Wang', 666];
  /** 定義數組4 */
  public userList: any[] = [
    {
      name: '張三',
      age: 20
    },
    {
      name: '李四',
      age: 30
    },
    {
      name: '王五',
      age: 40
    },
  ];
  /** 定義數組5 */
  public cars: any[] = [{
    brand: 'BMW',
    list: [{
      title: 'x1',
      price: 100000
    },
      {
        title: 'x2',
        price: 200000
      },
      {
        title: 'x3',
        price: 300000
      }]
  },
    {
      brand: 'Benz',
      list: [{
        title: 'a1',
        price: 100000
      },
        {
          title: 'a2',
          price: 200000
        },
        {
          title: 'a3',
          price: 300000
        }]
    }];


  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.list2.push('這是第:' + i + '條數據');
    }
  }

}

/** 定義對象 */
class User {
  name: string;
  age: string;
}
