import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-detail-view',
  templateUrl: './courses-detail-view.component.html',
  styleUrls: ['./courses-detail-view.component.css']
})
export class CoursesDetailViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  isShown: boolean = false ; 
  toggleShow() {
  this.isShown = ! this.isShown;
  }

  isShown1: boolean = true ; 
  toggleShow1() {
  this.isShown1 = ! this.isShown1;
  }

  isShown2: boolean = true ; 
  toggleShow2() {
  this.isShown2 = ! this.isShown2;
  }
  
  isShown3: boolean = true ; 
  toggleShow3() {
  this.isShown3 = ! this.isShown3;
  }

  isShown4: boolean = true ; 
  toggleShow4() {
  this.isShown4 = ! this.isShown4;
  }

  isShown5: boolean = true ; 
  toggleShow5() {
  this.isShown5 = ! this.isShown5;
  }
}
