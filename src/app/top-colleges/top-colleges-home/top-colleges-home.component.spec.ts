import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCollegesHomeComponent } from './top-colleges-home.component';

describe('TopCollegesHomeComponent', () => {
  let component: TopCollegesHomeComponent;
  let fixture: ComponentFixture<TopCollegesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCollegesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCollegesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
