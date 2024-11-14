import {Component, Input, OnInit} from '@angular/core';
import {AnimatedTile} from "../../../../models/tiles/AnimatedTile";

@Component({
  selector: 'app-stream-tile',
  templateUrl: './stream-tile.component.html',
  styleUrls: ['./stream-tile.component.css']
})
export class StreamTileComponent implements OnInit {

  @Input()
  animatedTile: AnimatedTile;

  constructor() { }

  ngOnInit() {
  }

}
