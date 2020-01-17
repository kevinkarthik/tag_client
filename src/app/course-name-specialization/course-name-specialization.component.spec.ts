import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNameSpecializationComponent } from './course-name-specialization.component';

describe('CourseNameSpecializationComponent', () => {
  let component: CourseNameSpecializationComponent;
  let fixture: ComponentFixture<CourseNameSpecializationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseNameSpecializationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseNameSpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
