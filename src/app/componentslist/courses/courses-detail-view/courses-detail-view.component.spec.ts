import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDetailViewComponent } from './courses-detail-view.component';

describe('CoursesDetailViewComponent', () => {
  let component: CoursesDetailViewComponent;
  let fixture: ComponentFixture<CoursesDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
