import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, RouterEvent } from '@angular/router';
import { BrowserStack } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  showHome: boolean;

  constructor() { }

  ngOnInit() {
    console.log("showHome: " +this.showHome);
  }

  onBackClicked() {
    history.go(-1);
  }

}
