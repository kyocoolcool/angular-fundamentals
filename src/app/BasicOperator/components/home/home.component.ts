import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public picUrl = 'https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/TeXt-home.jpg';
  public list: any[] = [{
    title: '新聞1'
  },
    {
      title: '新聞2'
    },
    {
      title: '新聞3'
    }];
  public title: string = 'I am title';
  public flag: boolean = false;
  public orderStatus: number = 3;
  /**1:已經支付 2:支付並且確認訂單 3:已經發貨 4:無效*/

  /**狀態屬性*/
  public attr: string = 'pink';

  public today: any = new Date();

  public keywords: string = '這是默認值';

  constructor() {
    console.log(this.today);
  }

  ngOnInit() {
  }

  run() {
    alert('執行方法');
  }

  getData() {
    alert(this.list[2].title)
  }

  setData() {
    this.title = 'changed title';
  }

  /**e.target:獲取當前對象*/
  keyDown(e) {
    if(e.key=='Enter')
      console.log('按了Enter')
    else
      console.log(e.key)
  }

  keyUp(e) {
    if (e.key == 'Enter'){
      console.log(e.target.value)
      console.log('按了Enter')
    }
  }

  getEvent(event) {
    let dom:any = event.target;
    dom.style.color = 'red';
  }

  changeKeyWords() {
    this.keywords = '我是改變後的值';
  }

  getKeyWords() {
    console.log(this.keywords);
  }
}
