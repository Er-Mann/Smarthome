import { TestBed } from '@angular/core/testing';

import { FilterHotkeyService } from './filter-hotkey.service';

describe('FilterHotkeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterHotkeyService = TestBed.get(FilterHotkeyService);
    expect(service).toBeTruthy();
  });
});
