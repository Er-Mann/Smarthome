import {Component, Input, OnInit} from '@angular/core';
import {Actuator, TwoStateActuator, VariableActuator} from "../../../../models/devices/Actuator";

@Component({
  selector: 'app-actuator-tile',
  templateUrl: './actuator-tile.component.html',
  styleUrls: ['./actuator-tile.component.css']
})
export class ActuatorTileComponent implements OnInit {

  @Input()
  actuator: Actuator;

  constructor() {
  }

  ngOnInit() {
  }

  isTwoStateActuator(): boolean {
    return (this.actuator instanceof TwoStateActuator);
  }

  onIncrementClick() {
    if (!this.isTwoStateActuator()) {
      (this.actuator as VariableActuator).value += (this.actuator as VariableActuator).step;
      if ((this.actuator as VariableActuator).value > (this.actuator as VariableActuator).max) {
        (this.actuator as VariableActuator).value = (this.actuator as VariableActuator).max;
      }
    }
  }

  onDecrementClick() {
    if (!this.isTwoStateActuator()) {
      (this.actuator as VariableActuator).value -= (this.actuator as VariableActuator).step;
      if ((this.actuator as VariableActuator).value < (this.actuator as VariableActuator).min) {
        (this.actuator as VariableActuator).value = (this.actuator as VariableActuator).min;
      }
    }
  }

  toggleState() {
    if (this.actuator.changeable) {

      if (this.isTwoStateActuator()) {
        (this.actuator as TwoStateActuator).isOn = !(this.actuator as TwoStateActuator).isOn;
      } else {
        if ((this.actuator as VariableActuator).value > (this.actuator as VariableActuator).min) {
          (this.actuator as VariableActuator).value = (this.actuator as VariableActuator).min;
        } else {
          (this.actuator as VariableActuator).value = (this.actuator as VariableActuator).max;
        }
      }
    }
  }

  getImageUrl(): string {
    if (this.isTwoStateActuator()) {
      let twoStateActuator = (this.actuator as TwoStateActuator);
      return (twoStateActuator.isOn) ? twoStateActuator.imgUrlOn : twoStateActuator.imgUrlOff;
    } else {
      let variableActuator = (this.actuator as VariableActuator);
      return (variableActuator.value <= variableActuator.min) ? variableActuator.imgUrlOff : variableActuator.imgUrlOn;
    }
  }

  canDecrement(): boolean {
    if (!this.isTwoStateActuator()) {
      let variableActuator = (this.actuator as VariableActuator);
      if (!variableActuator.changeable) {
        return  false;
      }
      return (variableActuator.value > variableActuator.min);
    }
  }

  canIncrement(): boolean {
    if (!this.isTwoStateActuator()) {
      let variableActuator = (this.actuator as VariableActuator);
      if (!variableActuator.changeable) {
        return  false;
      }
      return (variableActuator.value < variableActuator.max);
    }
  }

  getCurrentValue(): string {
    if (this.isTwoStateActuator()) {
      return (this.actuator as TwoStateActuator).isOn ? "On" : "Off";
    } else {
      return (this.actuator as VariableActuator).value + " " + (this.actuator as VariableActuator).unit;
    }
  }
}
