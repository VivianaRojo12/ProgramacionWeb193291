import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderUpComponent } from './order-up.component';

describe('OrderUpComponent', () => {
  let component: OrderUpComponent;
  let fixture: ComponentFixture<OrderUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
