import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeSinglePageComponent } from './college-single-page.component';

describe('CollegeSinglePageComponent', () => {
  let component: CollegeSinglePageComponent;
  let fixture: ComponentFixture<CollegeSinglePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeSinglePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
