import {Sensor} from "../../../models/devices/Sensor";

export class SensorWrapper {
  sensor: Sensor;
  selected: boolean;


  constructor(sensor: Sensor, selected: boolean) {
    this.sensor = sensor;
    this.selected = selected;
  }
}
