import {v4 as uuid} from 'uuid';
import {SensorRelations} from './SensorRelations';
import {Actuator} from "../../../models/devices/Actuator";

export class Relation {
  actuators: Actuator[];
  id: string; //entryId
  name: string;
  fun: string;
  delay: number;
  operation: number; //0=AND, 1=OR
  duration: number;
  value: number;
  priority: number;
  active: boolean;
  sensors: SensorRelations[];

  constructor(actuators: Actuator[]=[],name: string = '', fun: string = '', delay: number = 0,operation: number = 0, duration: number = 0, value: number = 0, priority: number = 0, active: boolean = false, sensors: SensorRelations[] = []) {
    this.id = uuid();
    this.actuators = actuators;
    this.name = name;
    this.fun = fun;
    this.delay = delay;
    this.operation = operation;
    this.duration = duration;
    this.value = value;
    this.priority = priority;
    this.active = active;
    this.sensors = sensors;
  }
}

