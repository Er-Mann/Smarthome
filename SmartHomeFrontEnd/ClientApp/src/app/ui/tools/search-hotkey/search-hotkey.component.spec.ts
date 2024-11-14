import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHotkeyComponent } from './search-hotkey.component';

describe('SearchHotkeyComponent', () => {
  let component: SearchHotkeyComponent;
  let fixture: ComponentFixture<SearchHotkeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHotkeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHotkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
