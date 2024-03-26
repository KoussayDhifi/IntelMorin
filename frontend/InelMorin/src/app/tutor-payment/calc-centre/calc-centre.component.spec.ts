import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcCentreComponent } from './calc-centre.component';

describe('CalcCentreComponent', () => {
  let component: CalcCentreComponent;
  let fixture: ComponentFixture<CalcCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalcCentreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
