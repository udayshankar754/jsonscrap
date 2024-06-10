import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviewdataComponent } from './dataviewdata.component';

describe('DataviewdataComponent', () => {
  let component: DataviewdataComponent;
  let fixture: ComponentFixture<DataviewdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataviewdataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataviewdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
