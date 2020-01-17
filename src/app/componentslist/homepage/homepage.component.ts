import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  @ViewChild('college',{static:true}) college: ElementRef;
  @ViewChild('vendor',{static:true}) vendor: ElementRef;

  private closeModal(): void {
    this.college.nativeElement.click();
    this.vendor.nativeElement.click();
}
  images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-Mr9nJkMxK-gToi5po33Di6k1YnEMtYF3Gv_E_sfzUQ7weYO&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-Mr9nJkMxK-gToi5po33Di6k1YnEMtYF3Gv_E_sfzUQ7weYO&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-Mr9nJkMxK-gToi5po33Di6k1YnEMtYF3Gv_E_sfzUQ7weYO&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-Mr9nJkMxK-gToi5po33Di6k1YnEMtYF3Gv_E_sfzUQ7weYO&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-Mr9nJkMxK-gToi5po33Di6k1YnEMtYF3Gv_E_sfzUQ7weYO&s'
  ];

  images3 = [
    'https://image.freepik.com/free-photo/smiling-students-with-backpacks_1098-1220.jpg',
    'http://yesofcorsa.com/wp-content/uploads/2017/11/Students-Wallpaper-Background-1024x682.jpg',
    'https://freedesignfile.com/upload/2017/01/Finger-lamp-Young-female-student-and-book-HD-picture.jpg',
    'http://pngimg.com/uploads/student/student_PNG62561.png',
    'https://img.freepik.com/free-photo/teenager-student-girl-yellow-pointing-finger-side_1368-40175.jpg?size=626&ext=jpg'
  ];

  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 5, lg: 5, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };


  public carouselTile3: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 4, lg: 4, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };



  safeSrc: SafeResourceUrl;
 
  constructor(private _cdr: ChangeDetectorRef,private sanitizer: DomSanitizer,private router:Router) { 
     this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/c9F5kMUfFKk");}

  ngAfterViewInit() {
    this._cdr.detectChanges();
  }

  ngOnInit() {
    
  }

  patnerwithus(value){
    console.log(value)
    if(value=="college"){
      this.router.navigate(["/partner_withus_college"]);
    }else{
      this.router.navigate(["/partner_with_us"]);
    }
    this.closeModal();
  }


}
