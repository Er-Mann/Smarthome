import {Injectable} from '@angular/core';
import {BaseTile} from '../../../models/tiles/BaseTile';
import {Actuator, TwoStateActuator, VariableActuator} from '../../../models/devices/Actuator';
import {RelationRow} from "../../../models/relations/RelationRow";
import {ActuatorWrapper} from "./ActuatorWrapper";
import {Relation} from "./Relation";
import {SensorWrapper} from './SensorWrapper';
import {Sensor, TwoStateSensor} from '../../../models/devices/Sensor';
import {SensorRelations} from './SensorRelations';
import {FilterCategory, Keyword} from "../../../models/Searchable";

@Injectable({
  providedIn: 'root'
})
export class RelationService {

  actuators: ActuatorWrapper[] = [
    new ActuatorWrapper(new TwoStateActuator('Fernseher', '/assets/img/rooms/fernseher.png', '/assets/img/rooms/fernseher2.png', false,"",null,null,null,"","",null,null, false, [new FilterCategory("Room", [new Keyword("Wohnzimmer")])]), false),
    new ActuatorWrapper(new TwoStateActuator('Hintergrundbeleuchtung', '/assets/img/rooms/lampOn.png', '/assets/img/rooms/beleuchtung.png', false,"",null,null,null,"","",null,null, false, [new FilterCategory("Room", [new Keyword("Wohnzimmer")])]), false),
    new ActuatorWrapper(new VariableActuator('Heizung', '/assets/img/rooms/radiator.png', '/assets/img/rooms/radiator.png', 0, 100, 5, 20, '%', false,"",null,null,null,"","",null,null, [new FilterCategory("Room", [new Keyword("Flur")])]), false),
    new ActuatorWrapper(new VariableActuator('Beleuchtung', '/assets/img/rooms/LED.png', '/assets/img/rooms/LEDoff.png', 0, 100, 10, 0, '%', false,"",null,null,null,"","",null,null, [new FilterCategory("Room", [new Keyword("Esszimmer")])]), false),
    new ActuatorWrapper(new VariableActuator('Jalousien', '/assets/img/rooms/jalousien.png', '/assets/img/rooms/jalousienOff.png', 0, 100, 10, 0, '%', false,"",null,null,null,"","",null,null, [new FilterCategory("Room", [new Keyword("Esszimmer")])]), false)
  ];

  sensors: SensorWrapper[] = [
    new SensorWrapper(new TwoStateSensor('Fenster 1', '/assets/img/rooms/temperaturOff.png', '/assets/img/rooms/temperaturOff.png', true,"",null,"","",null,null, [new FilterCategory("Room", [new Keyword("Wohnzimmer")])]), true),
    new SensorWrapper(new TwoStateSensor('Fenster 2', '/assets/img/rooms/temperaturOff.png', '/assets/img/rooms/temperaturOff.png', true,"",null,"","",null,null, [new FilterCategory("Room", [new Keyword("Wohnzimmer")])]), true),
    new SensorWrapper(new TwoStateSensor('Fenster 3', '/assets/img/rooms/temperaturOff.png', '/assets/img/rooms/temperaturOff.png', true,"",null,"","",null,null, [new FilterCategory("Room", [new Keyword("Flur")])]), true),
    new SensorWrapper(new TwoStateSensor('Fenster 4', '/assets/img/rooms/temperaturOff.png', '/assets/img/rooms/temperaturOff.png', true,"",null,"","",null,null, [new FilterCategory("Room", [new Keyword("Flur")])]), true),
    new SensorWrapper(new TwoStateSensor('Fenster 5', '/assets/img/rooms/temperaturOff.png', '/assets/img/rooms/temperaturOff.png', true,"",null,"","",null,null, [new FilterCategory("Room", [new Keyword("Esszimmer")])]), true),
    new SensorWrapper(new TwoStateSensor('Fenster 6', '/assets/img/rooms/temperaturOff.png', '/assets/img/rooms/temperaturOff.png', true,"",null,"","",null,null, [new FilterCategory("Room", [new Keyword("Esszimmer")])]), false),
    new SensorWrapper(new TwoStateSensor('Fenster 7', '/assets/img/rooms/temperaturOff.png', '/assets/img/rooms/temperaturOff.png', true,"",null,"","",null,null, [new FilterCategory("Room", [new Keyword("Esszimmer")])]), false)
  ];

  relations: Relation[] = [];

  newRelations: Relation[] = [];

  constructor() {
  }

  public getSelectedActuators(): ActuatorWrapper[] {
    return this.actuators.filter(it => it.selected);
  }

  public getAllRellationRows(): Relation[] {
    return this.relations;
  }

  public getRealationRowById(id: string): Relation {
    // console.log("enrty" + this.relationRows.filter(entry => {
    //   console.log("Given:   -" + id + "-");
    //   console.log("Current: -" + entry.id + "-");
    //   return entry.id === id
    // }));

    return this.relations.filter(entry => entry.id == id)[0];
  }

  public onActuatorClick(actuator: ActuatorWrapper) {
    actuator.selected = !actuator.selected;
  }


  public getSelectedSensors(): SensorWrapper[] {
    return this.sensors.filter(sensor => sensor.selected);
  }

  public getCountofSelectedSensors(id: string): number {
    return this.getRealationRowById(id).sensors.length;
  }

  public onSensorClick(sensor: SensorWrapper) {
    sensor.selected = !sensor.selected;
  }

  public getAllSensors(): SensorWrapper[] {
    return this.sensors;
  }

}
