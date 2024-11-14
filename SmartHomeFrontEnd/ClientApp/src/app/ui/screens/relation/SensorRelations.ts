import {Sensor} from '../../../models/devices/Sensor';
import {v4 as uuid} from 'uuid';

export class SensorRelations {
  id: number;
  sensor: Sensor;
  compare: string;
  minTime: number;
  compareValue: number;
  condition: string;
  startTime: string;
  endTime: string;


  constructor(sensor: Sensor, compare: string = '', minTime: number = 0, compareValue: number = 0, condition: string = '', startTime: string = '00:00', endTime: string = '22:00') {
    this.id = uuid();
    this.sensor = sensor;
    this.compare = compare;
    this.minTime = minTime;
    this.compareValue = compareValue;
    this.condition = condition;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
