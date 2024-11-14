import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuatorDetailComponent } from './actuator-detail.component';

describe('ActuatorDetailComponent', () => {
  let component: ActuatorDetailComponent;
  let fixture: ComponentFixture<ActuatorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuatorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuatorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
