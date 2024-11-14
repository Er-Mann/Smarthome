import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeableTileComponent } from './changeable-tile.component';

describe('ChangeableTileComponent', () => {
  let component: ChangeableTileComponent;
  let fixture: ComponentFixture<ChangeableTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeableTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeableTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
