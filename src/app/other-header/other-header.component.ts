import { Component, OnInit, Renderer2, ViewChild, ElementRef,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-other-header',
  templateUrl: './other-header.component.html',
  styleUrls: ['./other-header.component.css']
})
export class OtherHeaderComponent implements OnInit {

  @ViewChild('toggleButton',{static:false}) toggleButton: ElementRef;
  @ViewChild('menu',{static:false}) menu: ElementRef;


  constructor(private renderer: Renderer2) {

    
  }

  ngOnInit() {

  }
  ngAfterViewInit() {this.renderer.listen('window', 'click',(e:Event)=>{
    console.log(e.target)

      if(e.target !== this.toggleButton.nativeElement && e.target!==this.menu.nativeElement){
          this.dropdown_visible=false;
          console.log("hi")
      }
  });}
  appitems = [
    {
      label: 'Top Courses',
      items: [
        {
          label: 'course Name1',
          link: '/course_details',
        },
        {
          label: 'course Name2',
          items: [
            {
              label: 'Item 1.2.1',
              link: '/item-1-2-1',
            },
            {
              label: 'Item 1.2.2',
              items: [
                {
                  label: 'Item 1.2.2.1',
                  link: 'item-1-2-2-1',
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Popular Specialization',
      items: [
        {
          label: 'Course 1',
          items: [
            {
              label: 'Specialization 1',
              link: '/course_detail_specialization',
            }
          ]
        },
        {
          label: 'course 2',
          link: '/item-2-2',
        }
      ]
    },
    {
      label: 'Top Colleges',
      link: '/item-3',
      items: [
        {
          label: 'college 1',
          link: '/college_singlepage',
        }
      ]
    },
    {
      label: 'College By Locations',
      items: [
        {
          label: 'Location 1',
          link: '/course_name_specialization',
        }
      ]
    },
    {
      label: 'Compare Colleges',
      link: '/item-4',
      items: [
        {
          label: 'Compare Colleges',
          link: '/college_comparision',
        }
      ]
    },
    {
      label: 'College Reviews',
      link: '/item-4',
      items: [
        {
          label: 'Item 1.1',
          link: '/item-1-1',
        }
      ]
    },
    {
      label: 'Rank Predictor',
      link: '/item-4',
      items: [
        {
          label: 'Rank Predictor 1',
          link: '/rank_predictor',
        }
      ]
    },
    {
      label: 'School',
      link: '/item-4',
      items: [
        {
          label: 'Item 1.1',
          link: '/item-1-1',
        }
      ]
    },
    {
      label: 'Salary Trend Report',
      link: '/item-4',
      items: [
        {
          label: 'Salary Trend Report',
          link: '/salary_trend_report',
        }
      ]
    },
    {
      label: 'Results',
      link: '/item-4',
      items: [
        {
          label: 'After 10th',
          link: '/careers-after-tenth',
        },
        {
          label: 'After 12th',
          link: '/careers-after-twelve',
        },
        {
          label: 'After UG',
          link: '/careers-after-ug',
        },
        {
          label: 'After PG',
          link: '/careers-after-pg',
        }
      ]
    },
    {
      label: 'Study Abroad',
      link: '/item-4',
      items: [
        {
          label: 'Item 1.1',
          link: '/item-1-1',
        }
      ]
    },
    {
      label: 'Resources',
      link: '/item-4',
      items: [
        {
          label: 'Item 1.1',
          link: '/item-1-1',
        }
      ]
    }
  ];



  config = {
    paddingAtStart: true,
    classname: 'my-custom-class',
    listBackgroundColor: 'transparent',
    fontColor: 'white',
    // backgroundColor: 'rgb(208, 241, 239)',
    selectedListFontColor: 'white',
  };

  dropdown_visible:boolean=false;
  mydrop(){
      this.dropdown_visible = !this.dropdown_visible
  }



}
