import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersAfterTwelveComponent } from './careers-after-twelve.component';

describe('CareersAfterTwelveComponent', () => {
  let component: CareersAfterTwelveComponent;
  let fixture: ComponentFixture<CareersAfterTwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareersAfterTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersAfterTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
