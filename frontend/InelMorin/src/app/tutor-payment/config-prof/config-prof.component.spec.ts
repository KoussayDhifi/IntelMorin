import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigProfComponent } from './config-prof.component';

describe('ConfigProfComponent', () => {
  let component: ConfigProfComponent;
  let fixture: ComponentFixture<ConfigProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigProfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
