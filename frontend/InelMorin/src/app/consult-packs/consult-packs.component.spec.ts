import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultPacksComponent } from './consult-packs.component';

describe('ConsultPacksComponent', () => {
  let component: ConsultPacksComponent;
  let fixture: ComponentFixture<ConsultPacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultPacksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultPacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
