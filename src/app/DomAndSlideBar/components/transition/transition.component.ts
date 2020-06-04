import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css']
})
export class TransitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showAslide() {
    const aslide = document.getElementById('aslide');
    aslide.style.transform = 'translate(0,0)';
  }

  hiddenAslide() {
    const aslide = document.getElementById('aslide');
    aslide.style.transform = 'translate(100%,0)';
  }

}
