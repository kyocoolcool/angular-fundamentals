import { Component, OnInit } from '@angular/core';
// 當作一個服務
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpserviceService} from '../../services/httpservice.service';

// 使用服務裡面的 axios 獲取數據

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public list: any[] = [];

  constructor(public http: HttpClient, public httpService: HttpserviceService) { }

  ngOnInit() {
  }

  getData() {
    console.log('hello');
    const api = 'http://a.itying.com/api/productlist';
    this.http.get(api).subscribe((response: any) => {
      console.log(response);
      this.list = response.result;
    });
  }

  postData() {
    // 手動設置請求類型
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    // 存在跨域
    const api = ('http://127.0.0.1:3000/doLogin');
    this.http.post(api, {userName: '張三', age: 20}, httpOptions).subscribe((response => {
      console.log(response);
    }));
  }

  getJsonpData() {
    // jsonp請求 服務器必須得支持jsonp
    // http://a.itying.com/api/productlist?callback=xxx
    console.log('getJsonData');
    const api = 'http://a.itying.com/api/productlist';
    this.http.jsonp(api, 'callback').subscribe(response => {
      console.log(response);
    });
  }

  // getAxiosData() {
  //   console.log('axios獲取數據')
  //   let api="http://a.itying.com/api/productlist";
  //   this.httpService.axiosGet(api).then((data)=>{
  //     console.log(data);
  //   })
  // }
}
