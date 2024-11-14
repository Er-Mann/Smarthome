import {Component, Input, OnInit} from '@angular/core';
import {Sensor, TwoStateSensor, VariableSensor} from "../../../../models/devices/Sensor";

@Component({
  selector: 'app-sensor-tile',
  templateUrl: './sensor-tile.component.html',
  styleUrls: ['./sensor-tile.component.css']
})
export class SensorTileComponent implements OnInit {

  @Input()
  sensor: Sensor;

  constructor() { }

  ngOnInit() {
  }

  private isTwoStateSensor(): boolean {
    return (this.sensor instanceof TwoStateSensor);
  }

  getSensorImage(): string {
    if (this.isTwoStateSensor()) {
      let twoStateSensor = (this.sensor as TwoStateSensor);
      return twoStateSensor.isOn ? twoStateSensor.imgUrlOn : twoStateSensor.imgUrlOff;
    } else {
      let twoStateSensor = (this.sensor as VariableSensor);
      return twoStateSensor.currentValue >= 0 ? twoStateSensor.imgUrlOn : twoStateSensor.imgUrlOff;
    }
  }

  getCurrentValue(): string {
    if (this.isTwoStateSensor()) {
      return (this.sensor as TwoStateSensor).isOn ? "On" : "Off";
    } else {
      return (this.sensor as VariableSensor).currentValue + " " + (this.sensor as VariableSensor).unit;
    }
  }
}
