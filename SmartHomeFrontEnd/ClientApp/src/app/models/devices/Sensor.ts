import { BaseDevice } from "./BaseDevice";
import { FilterCategory, Keyword } from "../Searchable";

export class Sensor extends BaseDevice {
  imgUrlOn: string;
  imgUrlOff: string;
  type: string;
  value: number;
  state: string;
  changed: string;
  on: number;
  off: number;

  constructor(name: string, imgUrlOn: string, imgUrlOff: string, type: string,
    value: number,
    state: string,
    changed: string,
    on: number,
    off: number, keywords: FilterCategory[] = []) {
    super(name);
    this.imgUrlOn = imgUrlOn;
    this.imgUrlOff = imgUrlOff;
    this.type = type;
    this.value = value;
    this.state = state;
    this.changed = changed;
    this.off = off;
    this.on = on;

    this.addKeyword(new FilterCategory('Devices', [new Keyword("Sensor", false)]));
    keywords.forEach(filter => {
      this.addKeyword(filter);
    });
  }
}

export class TwoStateSensor extends Sensor {
  isOn: boolean;

  constructor(name: string, imgUrlOn: string, imgUrlOff: string, isOn: boolean,  type: string,
    value: number,
    state: string,
    changed: string,
    on: number,
    off: number,keywords: FilterCategory[] = []) {
    super(name, imgUrlOn, imgUrlOff, type,
      value,
      state,
      changed,
      on,
      off, keywords);
    this.isOn = isOn;
  }
}

export class VariableSensor extends Sensor {
  currentValue: number;
  unit: string;

  constructor(name: string, imgUrlOn: string, imgUrlOff: string, currentValue: number, unit: string, type: string,
    value: number,
    state: string,
    changed: string,
    on: number,
    off: number, keywords: FilterCategory[] = []) {
    super(name, imgUrlOn, imgUrlOff, type,
      value,
      state,
      changed,
      on,
      off, keywords);
    this.currentValue = currentValue;
    this.unit = unit;
  }
}


