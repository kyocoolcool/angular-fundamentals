import {Component, OnInit} from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  goContent() {
    //  動態路由js跳轉(普通路由//動態路由)
    this.router.navigate(['/productContent/', '1234']);
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  goNews() {
    // get 傳值 js跳轉
    const queryParams: NavigationExtras = {
      queryParams : {aid: 123}
  };
    this.router.navigate(['news'], queryParams);
  }
}
