import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public keyWords: string;
  public searchHistory: any[] = [];

  constructor(public storageService:StorageService) {
  }

  ngOnInit() {
    console.log('頁面刷新會觸發此生命週期')
    var list:any = this.storageService.get('searchHistory');
    if(list)
       this.searchHistory= list;
  }

  doSearch() {
    if (this.searchHistory.indexOf(this.keyWords) == -1) {
      this.searchHistory.push(this.keyWords);
      this.storageService.set('searchHistory', this.searchHistory);
    }
    this.keyWords = '';
  }

  delteHistory(key) {
    this.searchHistory.splice(key, 1)
    this.storageService.set('searchHistory', this.searchHistory);
  }
}
