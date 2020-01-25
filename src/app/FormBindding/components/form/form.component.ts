import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public peopleInfo:any={
    userName: '111111',
    sex: '1',
    cityList:['北京','上海','深圳'],
    city: '北京',
    hobby:[{
      title: '吃飯',
      checked: false
    },{
      title: '睡覺',
      checked: false
    },{
      title: '敲代碼',
      checked: true
    }],
    mark:'Hello'
  }
  constructor() { }

  ngOnInit() {
  }

  doSubmit() {
    /**
     * jquery dom操作
     let nameDom:any=document.getElementById('userName')
     console.log(nameDom.value)
     */

    console.log(this.peopleInfo)
    }
}
