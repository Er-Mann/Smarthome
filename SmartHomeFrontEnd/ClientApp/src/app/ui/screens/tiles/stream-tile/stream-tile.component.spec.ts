import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamTileComponent } from './stream-tile.component';

describe('StreamTileComponent', () => {
  let component: StreamTileComponent;
  let fixture: ComponentFixture<StreamTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
