import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensoroverviewComponent } from './sensoroverview.component';

describe('SensoroverviewComponent', () => {
  let component: SensoroverviewComponent;
  let fixture: ComponentFixture<SensoroverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SensoroverviewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensoroverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
