import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarauselComponent } from './carausel.component';

describe('CarauselComponent', () => {
  let component: CarauselComponent;
  let fixture: ComponentFixture<CarauselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarauselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarauselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
