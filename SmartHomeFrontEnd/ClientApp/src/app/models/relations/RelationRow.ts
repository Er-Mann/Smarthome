import { v4 as uuid } from 'uuid';

export class RelationRow {
  id: string;
  sensor: string;
  logic: string;
  priority: number;
  active: boolean;

  constructor(sensor: string, logic: string, priority: number, active: boolean) {
    this.id = uuid();
    this.sensor = sensor;
    this.logic = logic;
    this.priority = priority;
    this.active = active;
  }
}
