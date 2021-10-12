import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopualrDishesComponent } from './popualr-dishes.component';

describe('PopualrDishesComponent', () => {
  let component: PopualrDishesComponent;
  let fixture: ComponentFixture<PopualrDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopualrDishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopualrDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
