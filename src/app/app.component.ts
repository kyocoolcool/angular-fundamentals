import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularDemo';
  public flag = true;
  // chabgeTitle() {
  //   this.title = 'change title';
  // }
  //
  // changeFlag() {
  //   this.flag = !this.flag;
  // }
}
