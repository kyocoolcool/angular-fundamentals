import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NewsComponent} from './BasicOperator/components/news/news.component';
import {HomeComponent} from './BasicOperator/components/home/home.component';
import {HeadComponent} from './BasicOperator/components/head/head.component';
import {NewcontentComponent} from './components/newcontent/newcontent.component';
import {ProductComponent} from './BasicOperator/components/product/product.component';
import {ProductContentComponent} from './components/product-content/product-content.component';
import {WelcomeComponent} from './BasicOperator/components/home/welcome/welcome.component';
import {SettingComponent} from './BasicOperator/components/home/setting/setting.component';
import {PcatComponent} from './BasicOperator/components/product/pcat/pcat.component';
import {PlistComponent} from './BasicOperator/components/product/plist/plist.component';

// 路由映射實現SPA
const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    // 父子組件
    children: [
      {path: 'welcome', component: WelcomeComponent},
      {path: 'setting', component: SettingComponent},
      {path: '**', redirectTo: 'welcome'}
      ]
  },
  {
    path: 'news', component: NewsComponent
  },
  {
    path: 'head', component: HeadComponent
  },
  {
    path: 'product', component: ProductComponent,
    children: [
      {path: 'pcat', component: PcatComponent},
      {path: 'plist', component: PlistComponent},
      {path: '**', redirectTo: 'pcat'}
      ]
  },
  {
    // 後面 /:aid 為動態路由傳值
    path: 'newcontent/:aid', component: NewcontentComponent
  },
  {
    path: 'productContent/:pid', component: ProductContentComponent
  },
  // 匹配不到routing則默認為home
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
