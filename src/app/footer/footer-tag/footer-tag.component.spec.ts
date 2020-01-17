import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTagComponent } from './footer-tag.component';

describe('FooterTagComponent', () => {
  let component: FooterTagComponent;
  let fixture: ComponentFixture<FooterTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
