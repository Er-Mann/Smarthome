import { BaseDevice } from "./BaseDevice";
import { FilterCategory, Keyword } from "../Searchable";

export class Actuator extends BaseDevice {
  imgUrlOn: string;
  imgUrlOff: string;
  changeable: boolean;
  typ: string;
  wert: number;
  dauer: number;
  feindauer: number;
  zustandsWert: string;
  zustandText: string;
  on: number;
  off: number;

  constructor(name: string, imgUrlOn: string, imgUrlOff: string, changeable: boolean, typ: string, wert: number, dauer: number, feindauer: number,
    zustandsWert: string,
    zustandText: string,
    on: number,
    off: number, keywords: FilterCategory[] = []) {
    super(name);
    this.imgUrlOn = imgUrlOn;
    this.imgUrlOff = imgUrlOff;
    this.changeable = changeable;
    this.typ = typ;
    this.wert = wert;
    this.dauer = dauer;
    this.feindauer = feindauer;
    this.zustandText = zustandText;
    this.zustandsWert = zustandsWert;
    this.off = off;
    this.on = on;

    this.addKeyword(new FilterCategory('Devices', [new Keyword("Aktor", false)]));

    keywords.forEach(keyword => {
      this.addKeyword(keyword);
    });
  }
}

export class TwoStateActuator extends Actuator {

  isOn: boolean;

  constructor(name: string, imgUrlOn: string, imgUrlOff: string, changeable: boolean, typ: string, wert: number, dauer: number, feindauer: number, zustandsWert: string, zustandText: string, on: number,
    off: number, isOn: boolean, keyworkds: FilterCategory[] = []) {
    super(name, imgUrlOn, imgUrlOff, changeable, typ, wert, dauer, feindauer, zustandsWert, zustandText, on, off, keyworkds);

    this.isOn = isOn;
  }
}

export class VariableActuator extends Actuator {
  min: number;
  max: number;
  step: number;
  value: number;
  unit: string;

  constructor(name: string, imgUrlOn: string, imgUrlOff: string, min: number, max: number, step: number, value: number, unit: string, changeable: boolean, typ: string, wert: number, dauer: number, feindauer: number,
    zustandsWert: string,
    zustandText: string,
    on: number,
    off: number, keywords: FilterCategory[] = []) {
    super(name, imgUrlOn, imgUrlOff, changeable, typ, wert, dauer, feindauer,
      zustandsWert,
      zustandText,
      on,
      off);
    this.min = min;
    this.max = max;
    this.step = step;
    this.value = value;
    this.unit = unit;
  }
}


