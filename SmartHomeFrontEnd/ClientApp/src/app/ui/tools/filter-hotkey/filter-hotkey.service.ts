import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterHotkeyService {

  // Show and Hide Filter Icons
  filterHotKeyShow$ = new Subject<boolean>();

  constructor() { }
}
