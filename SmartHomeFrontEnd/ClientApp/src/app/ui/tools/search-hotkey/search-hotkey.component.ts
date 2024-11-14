import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-hotkey',
  templateUrl: './search-hotkey.component.html',
  styleUrls: ['./search-hotkey.component.css']
})
export class SearchHotkeyComponent implements OnInit {

  hideSearchHotkey: boolean = false;
  expanded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onExpandClick() {
    this.expanded = true;
  }

  onCollapseClick() {
    this.expanded = false;
  }

}
