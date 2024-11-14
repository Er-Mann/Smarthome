import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterHotkeyService } from './filter-hotkey.service';

const listNotShowHotkey = [
  'filter'
];

@Component({
  selector: 'app-filter-hotkey',
  templateUrl: './filter-hotkey.component.html',
  styleUrls: ['./filter-hotkey.component.css']
})
export class FilterHotkeyComponent implements OnInit {

  private routeSubscription$: Subscription;

  hideFilterHotKey: boolean = false;

  constructor(private hotkeyService: FilterHotkeyService) { }

  ngOnInit() {
    this.routeSubscription$ = this.hotkeyService.filterHotKeyShow$
      .subscribe(shouldHide => {
        console.log("Hide Filter: " + shouldHide);
        this.hideFilterHotKey = !shouldHide;
      });
  
    
  }

  ngOnDestroy(): void {
    if (this.routeSubscription$) {
      this.routeSubscription$.unsubscribe();
    }
  }
}
