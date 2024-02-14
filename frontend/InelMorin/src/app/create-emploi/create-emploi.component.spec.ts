<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmploiComponent } from './create-emploi.component';

describe('CreateEmploiComponent', () => {
  let component: CreateEmploiComponent;
  let fixture: ComponentFixture<CreateEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEmploiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmploiComponent } from './create-emploi.component';

describe('CreateEmploiComponent', () => {
  let component: CreateEmploiComponent;
  let fixture: ComponentFixture<CreateEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEmploiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 6ba20822fec39fc1715eb555b58c40e79f889300
