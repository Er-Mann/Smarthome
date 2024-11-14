import {Actuator} from "../../../models/devices/Actuator";
import {FilterCategory} from "../../../models/Searchable";

export class ActuatorWrapper {
  actuator: Actuator;
  selected: boolean;


  constructor(actuator: Actuator, selected: boolean) {
    this.actuator = actuator;
    this.selected = selected;
  }
}
