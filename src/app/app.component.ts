import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDemo';
  public flag: boolean = true;
  chabgeTitle() {
    this.title = 'change title';
  }

  changeFlag() {
    this.flag = !this.flag;
  }
}
