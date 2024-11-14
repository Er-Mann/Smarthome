import { Component, OnInit } from '@angular/core';
import {FilterHotkeyService} from "../../../tools/filter-hotkey/filter-hotkey.service";
import {RelationService} from "../relation.service";

@Component({
  selector: 'app-realtion-overview',
  templateUrl: './realtion-overview.component.html',
  styleUrls: ['./realtion-overview.component.css']
})
export class RealtionOverviewComponent implements OnInit {

  constructor(private hotkeyService: FilterHotkeyService, private relationService: RelationService) { }

  ngOnInit() {
    this.hotkeyService.filterHotKeyShow$.next(false);
  }

  ngOnDestroy(): void {
    this.hotkeyService.filterHotKeyShow$.next(true);
  }

}
