import {Component, Input, OnInit} from '@angular/core';
import {Actuator} from "../../../../models/devices/Actuator";

@Component({
  selector: 'app-changeable-tile',
  templateUrl: './changeable-tile.component.html',
  styleUrls: ['./changeable-tile.component.css']
})
export class ChangeableTileComponent implements OnInit {

  @Input()
  actuator: Actuator;

  constructor() { }

  ngOnInit() {
  }

}
