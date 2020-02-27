import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './BasicOperator/components/news/news.component';
import { HomeComponent } from './BasicOperator/components/home/home.component';
import { FormComponent } from './FormBindding/components/form/form.component';
import { SearchComponent } from './ToDoListAndSearchInMemory/components/search/search.component';
import { TodolistComponent } from './ToDoListAndSearchInMemory/components/todolist/todolist.component';
import {StorageService} from './ToDoListAndSearchInMemory/services/storage.service';
import { DomComponent } from './DomAndSlideBar/dom/dom.component';
import { HeadComponent } from './BasicOperator/components/head/head.component';
import { TransitionComponent } from './DomAndSlideBar/components/transition/transition.component';
import { Home2Component } from './ParentAndChildComunication/components/home2/home2.component';
import { News2Component } from './ParentAndChildComunication/components/news2/news2.component';
import { Header2Component } from './ParentAndChildComunication/components/header2/header2.component';
import { Footer2Component } from './ParentAndChildComunication/components/footer2/footer2.component';
import { LifecycleComponent } from './LifeCycle/components/lifecycle/lifecycle.component';
import {RequestService} from './RxJS/services/request.service';
import { Home3Component } from './RxJS/components/home3/home3.component';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './components/posts/posts.component';
import {HttpserviceService} from './services/httpservice.service';
import { NewcontentComponent } from './components/newcontent/newcontent.component';
import { ProductComponent } from './BasicOperator/components/product/product.component';
import { ProductContentComponent } from './components/product-content/product-content.component';
import { WelcomeComponent } from './BasicOperator/components/home/welcome/welcome.component';
import { SettingComponent } from './BasicOperator/components/home/setting/setting.component';
import { PcatComponent } from './BasicOperator/components/product/pcat/pcat.component';
import { PlistComponent } from './BasicOperator/components/product/plist/plist.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    FormComponent,
    SearchComponent,
    TodolistComponent,
    DomComponent,
    HeadComponent,
    TransitionComponent,
    Home2Component,
    News2Component,
    Header2Component,
    Footer2Component,
    LifecycleComponent,
    Home3Component,
    PostsComponent,
    NewcontentComponent,
    ProductComponent,
    ProductContentComponent,
    WelcomeComponent,
    SettingComponent,
    PcatComponent,
    PlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [StorageService, RequestService, HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
