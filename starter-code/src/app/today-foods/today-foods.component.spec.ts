import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayFoodsComponent } from './today-foods.component';

describe('TodayFoodsComponent', () => {
  let component: TodayFoodsComponent;
  let fixture: ComponentFixture<TodayFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
