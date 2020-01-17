import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupModelsComponent } from './popup-models.component';

describe('PopupModelsComponent', () => {
  let component: PopupModelsComponent;
  let fixture: ComponentFixture<PopupModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
