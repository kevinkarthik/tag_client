import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-college-single-page',
  templateUrl: './college-single-page.component.html',
  styleUrls: ['./college-single-page.component.css']
})
export class CollegeSinglePageComponent implements OnInit {
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

      case ("courses"):
        document.getElementById("courses").scrollIntoView();
        break;

      case ("Reviews"):
        document.getElementById("Reviews").scrollIntoView();
        break;

      case ("admission_criteria"):
        document.getElementById("admission_criteria").scrollIntoView();
        break;

      case ("entrance-exam"):
        document.getElementById("entrance-exam").scrollIntoView();
        break;

      case ("facilities"):
        document.getElementById("facilities").scrollIntoView();
        break;

      case ("gallery"):
        document.getElementById("gallery").scrollIntoView();
        break;

      case ("events"):
        document.getElementById("events").scrollIntoView();
        break;

      case ("scholarships"):
        document.getElementById("scholarships").scrollIntoView();
        break;

      case ("questions-a"):
        document.getElementById("questions-a").scrollIntoView();
        break;

      case ("articles"):
        document.getElementById("articles1").scrollIntoView();
        break;

      default:
        document.getElementById("contacts").scrollIntoView();
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
