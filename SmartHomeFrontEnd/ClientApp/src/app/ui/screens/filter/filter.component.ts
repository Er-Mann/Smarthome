import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilterHotkeyService} from '../../tools/filter-hotkey/filter-hotkey.service';
import {FilterService} from './filter.service';
import {FilterCategory} from "../../../models/Searchable";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, OnDestroy {

  constructor(private hotkeyService: FilterHotkeyService, private filterService: FilterService) { }

  ngOnInit() {
    this.hotkeyService.filterHotKeyShow$.next(false);
  }

  ngOnDestroy(): void {
    this.hotkeyService.filterHotKeyShow$.next(true);
  }

  getCategories(): FilterCategory[] {
    return this.filterService.filterCategories;
  }

  // getItems(key: string): FilterItem[] {
  //   return this.filterService.getKeywordsPerCategory(key);
  //   // return this.getCategories().filter(cat => cat.key == key)[0].items;
  // }

}
