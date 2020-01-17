import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {
  isShown;
  isShown1;

  isShown2;

  isShown3;

  isShown4;

  isShown5;

  isShown6;

  isShown7;



  constructor() { }
  toggleShow() {
    this.isShown = !this.isShown;
  }

  toggleShow1() {
    this.isShown1 = !this.isShown1;
  }

  toggleShow2() {
    this.isShown2 = !this.isShown2;
  }

  toggleShow3() {
    this.isShown3 = !this.isShown3;
  }

  toggleShow4() {
    this.isShown4 = !this.isShown4;
  }

  toggleShow5() {
    this.isShown5 = !this.isShown5;
  }

  toggleShow6() {
    this.isShown6 = !this.isShown6;
  }

  toggleShow7() {
    this.isShown7 = !this.isShown7;
  }
  ngOnInit() {
  }

}
