import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPaymentComponent } from './grid-payment.component';

describe('GridPaymentComponent', () => {
  let component: GridPaymentComponent;
  let fixture: ComponentFixture<GridPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
