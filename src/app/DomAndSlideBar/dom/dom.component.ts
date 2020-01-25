import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.css']
})
export class DomComponent implements OnInit {
  public flag = true;
  // ViewChild操作DOM用法
  @ViewChild('myBox', {static: false}) myBox: any;
  // 調用子組件實例
  @ViewChild('header', {static: false}) header: any;

  constructor() { }

  /*
  * @description: ngOnInit不能完全獲取DOM節點
  * @param null
  * @return:
  * @author: Chris Chen
  * @time: 2019-05-18 11:38
  */
  ngOnInit() {
    const box: any = document.getElementById('box');
    console.log(box.innerHTML);
    box.style.color = 'red';

  }

  /**
   * @description: 完全獲取DOM節點的生命週期
   * @return:
   * @author: Chris Chen
   * @time: 2019-05-19 11:06
   */
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
    const box1: any = document.getElementById('box1');
    console.log(box1.innerHTML);
    box1.style.color = 'blue';

    this.myBox.nativeElement.style.height = '100px';
    this.myBox.nativeElement.style.width = '200px';
    this.myBox.nativeElement.style.backgroundColor = 'green';
    console.log(this.myBox.nativeElement.innerHTML);

  }

  getChildRun() {
    this.header.run();
  }
}
