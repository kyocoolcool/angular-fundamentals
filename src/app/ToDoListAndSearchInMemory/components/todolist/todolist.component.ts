import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../services/storage.service';

/**使用方法的其中之一*/
// var storageService = new StorageService();
// console.log(storageService);

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public keyWords: string;
  public doingList: any[] = [];

  constructor(public storageService: StorageService) {
  }

  ngOnInit() {
    let doingList1:any = this.storageService.get('doingList');
    if(doingList1)
      this.doingList = doingList1;
  }

  doAdd(e) {
    if (e.key == 'Enter') {
      if (!this.checkExist(this.doingList, this.keyWords)) {
        this.doingList.push({
          title: this.keyWords,
          status: 0
        });
        this.keyWords = '';
        this.storageService.set('doingList',this.doingList)
      } else {
        alert('數據重複 or 不能為空白');
        this.keyWords = '';
      }

    }
  }


  delete(key) {
    this.doingList.splice(key, 1);
    this.storageService.set('doingList',this.doingList)
  }

  checkExist(doingList: any[], keyWord: string) {
    if (!keyWord)
      return true;
    for (var i = 0; i < doingList.length; i++) {
      if (doingList[i].title == keyWord) {
        return true;
      }
    }
    return false;
  }

  changeStatus() {
    this.storageService.set('doingList', this.doingList);
  }
}
