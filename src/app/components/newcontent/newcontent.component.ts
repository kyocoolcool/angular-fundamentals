import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-newcontent',
  templateUrl: './newcontent.component.html',
  styleUrls: ['./newcontent.component.scss']
})
export class NewcontentComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    /* // get 接收news component傳參
    this.route.queryParams.subscribe((data) => {
      console.log(data);
    });
    */
    // 動態路由傳值
    this.route.params.subscribe(data => console.log(data));
  }

}
