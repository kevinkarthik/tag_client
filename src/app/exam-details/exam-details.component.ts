import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-details',
  templateUrl: './exam-details.component.html',
  styleUrls: ['./exam-details.component.css']
})
export class ExamDetailsComponent implements OnInit {
  isShown;
  isShown2;
  isShown3;
  isShown4;
  isShown5;
  isShown6;
  isShown7;
  isShown8;

  isShown9;

  isShown10;

  isShown11;


  constructor() { }

  ngOnInit() {
  }

  toTop(section_id) {
    
    switch (section_id) {

      case ("admitCard"):
        document.getElementById("admitCard").scrollIntoView();
        break;

      case ("applicatioForm"):
        document.getElementById("applicatioForm").scrollIntoView();
        break;

      case ("dates"):
        document.getElementById("dates").scrollIntoView();
        break;

      case ("questionPapers"):
        document.getElementById("questionPapers").scrollIntoView();
        break;

      case ("pattern"):
        document.getElementById("pattern").scrollIntoView();
        break;

      case ("syllabus"):
        document.getElementById("syllabus").scrollIntoView();
        break;

      case ("results"):
        document.getElementById("results").scrollIntoView();
        break;

      case ("answerKey"):
        document.getElementById("answerKey").scrollIntoView();
        break;

      case ("cutoff"):
        document.getElementById("cutoff").scrollIntoView();
        break;

      default:
        document.getElementById("counselling").scrollIntoView();
        break;
    }
  }


  toggleShow() {
    this.isShown = !this.isShown;
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
  toggleShow8() {
    this.isShown8 = !this.isShown8;
  }
  toggleShow9() {
    this.isShown9 = !this.isShown9;
  }
  toggleShow10() {
    this.isShown10 = !this.isShown10;
  }
  toggleShow11() {
    this.isShown11 = !this.isShown11;
  }

}
