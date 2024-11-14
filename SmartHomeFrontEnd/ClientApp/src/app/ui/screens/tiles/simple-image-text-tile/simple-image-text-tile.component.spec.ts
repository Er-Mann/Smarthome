import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleImageTextTileComponent } from './simple-image-text-tile.component';

describe('SimpleImageTextTileComponent', () => {
  let component: SimpleImageTextTileComponent;
  let fixture: ComponentFixture<SimpleImageTextTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleImageTextTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleImageTextTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
