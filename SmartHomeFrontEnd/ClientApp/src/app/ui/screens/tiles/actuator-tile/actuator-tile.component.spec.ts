import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuatorTileComponent } from './actuator-tile.component';

describe('ActuatorTileComponent', () => {
  let component: ActuatorTileComponent;
  let fixture: ComponentFixture<ActuatorTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuatorTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuatorTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
