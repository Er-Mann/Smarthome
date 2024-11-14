import {Component, OnInit} from '@angular/core';
import {FilterService} from '../filter/filter.service';
import {MainService} from './main.service';
import {AnimatedTile} from "../../../models/tiles/AnimatedTile";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private filterService: FilterService, private mainService: MainService) {
    filterService.prepareFilter([]);
  }

  ngOnInit(): void {
  }

  public getAllTiles() : AnimatedTile[]{
    return this.mainService.getAllTiles();
  }
}
