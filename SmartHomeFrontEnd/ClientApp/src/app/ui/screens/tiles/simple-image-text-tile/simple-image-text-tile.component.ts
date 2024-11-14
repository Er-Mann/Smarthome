import {Component, Input, OnInit} from '@angular/core';
import {BaseTile} from "../../../../models/tiles/BaseTile";

@Component({
  selector: 'app-simple-image-text-tile',
  templateUrl: './simple-image-text-tile.component.html',
  styleUrls: ['./simple-image-text-tile.component.css']
})
export class SimpleImageTextTileComponent implements OnInit {

  @Input()
  baseTile: BaseTile;

  constructor() { }

  ngOnInit() {
  }
}
