import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterHotkeyComponent } from './filter-hotkey.component';

describe('FilterHotkeyComponent', () => {
  let component: FilterHotkeyComponent;
  let fixture: ComponentFixture<FilterHotkeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterHotkeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterHotkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
