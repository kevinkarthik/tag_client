import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailSpecilizationComponent } from './course-detail-specilization.component';

describe('CourseDetailSpecilizationComponent', () => {
  let component: CourseDetailSpecilizationComponent;
  let fixture: ComponentFixture<CourseDetailSpecilizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailSpecilizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailSpecilizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
