import { Injectable } from '@angular/core';
import { Actuator } from 'src/app/models/devices/Actuator';
import { Sensor } from 'src/app/models/devices/Sensor';
import { FilterCategory, Keyword } from 'src/app/models/Searchable';

@Injectable({
  providedIn: 'root'
})
export class SecurityServiceService {

  actuators: Actuator[] = [
    new Actuator(
      "0001.01, Hinten, Werkstatt Flo", "", "", false, "LS", 0.0, 0.0, 0.0,
      "1",
      "Auto aus",
      null,
      null, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Flur", false)])]
    ),
    new Actuator(
      "0001.02, Vorne, Werkstatt Flo", "", "", false, "LS", 0.0, 0.0, 0.0,
      "1",
      "Auto aus",
      null,
      null, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Kinderzimmer", false)])]
    ),
    new Actuator(
      "0001.03, Lichtauslass, Heizraum", "", "", false, "LS", 0.0, 0.0, 0.0,
      "1",
      "Auto aus",
      null,
      null, [new FilterCategory("Floor", [new Keyword("1. Stock", false)]), new FilterCategory("Room", [new Keyword("Schlafzimmer", false)])]
    ),
    new Actuator(
      "0001.04, Ventil, Heizraum", "", "", false, "VE", 0.0, 0.0, 0.0,
      "1",
      "Auto aus",
      null,
      null, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Bad", false)])]
    ),
    new Actuator(
      "0001.05, Ventil, Heizraum", "", "", false, "VE", 0.0, 0.0, 0.0,
      "1",
      "Auto aus",
      null,
      null, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Esszimmer", false)])]
    ),
    new Actuator(
      "0001.06, Ventil, Heizraum", "", "", false, "VE", 0.0, 0.0, 0.0,
      "1",
      "Auto aus",
      null,
      null, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Küche", false)])]
    ),
    new Actuator(
      "0001.07, Ventil, Heizraum", "", "", false, "VE", 0.0, 0.0, 0.0,
      "1",
      "Auto aus",
      null,
      null, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Küche", false)])]
    ),
    new Actuator(
      "0001.08, Ventil, Heizraum", "", "", false, "VE", 0.0, 0.0, 0.0,
      "1",
      "Auto aus",
      null,
      null, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Küche", false)])]
    ),
    new Actuator(
      "0001.09, Ventil, Heizraum", "", "", false, "VE", 0.0, 0.0, 0.0,
      "1",
      "Auto aus",
      null,
      null, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Küche", false)])]
    ),
    new Actuator(
      "0001.10, Ventil, Heizraum", "", "", false, "VE", 0.0, 0.0, 0.0,
      "1",
      "Auto aus",
      null,
      null, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Küche", false)])]
    ),
    new Actuator(
      "0001.11, Ventil, Heizraum", "", "", false, "VE", 0.0, 0.0, 0.0,
      "1",
      "Auto aus",
      null,
      null, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Küche", false)])]
    )
  ];

  sensors: Sensor[] = [
    new Sensor('0002.01, Fensterkontakt, Werkstatt Flo', '', '', 'FK', 1, '1', 'changed', null, null, [new FilterCategory("Floor", [new Keyword("2. Stock", false)]), new FilterCategory("Room", [new Keyword("Küche", false)])]),
    new Sensor('0002.02, Fensterkontakt, Werkstatt Flo', '', '', 'FK', 0.0, '0.0', 'normal', null, null, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Bad", false)])]),
    new Sensor('0002.03, Digitaler Eingang, Werkstatt Flo', '', '', 'DI', 0.0, '0.0', 'normal', null, null, [new FilterCategory("Floor", [new Keyword("2. Stock", false)]), new FilterCategory("Room", [new Keyword("Kinderzimmer", false)])]),
    new Sensor('0002.04, Temperatursensor, Werkstatt Flo', '', '', 'TE', 0.0, '0.0', 'normal', null, null, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Küche", false)])]),
    new Sensor('0002.05, Fensterkontakt, Heizraum', '', '', 'FK', 0.0, '0.0', 'gray', null, null, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Kinderzimmer", false)])]),
    new Sensor('0002.06, Türkontakt, Heizraum', '', '', 'TK', 0.0, '0.0', 'normal', null, null, [new FilterCategory("Floor", [new Keyword("1. Stock", false)]), new FilterCategory("Room", [new Keyword("Esszimmer", false)])]),
    new Sensor('0002.07,Türkontakt, Heizraum', '', '', 'TK', 0.0, '0.0', 'normal', null, null, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Flur", false)])]),
    new Sensor('0002.08,Türkontakt, Heizraum', '', '', 'TK', 0.0, '0.0', 'normal', null, null, [new FilterCategory("Floor", [new Keyword("2. Stock", false)]), new FilterCategory("Room", [new Keyword("Esszimmer", false)])]),
    new Sensor('0002.09,Türkontakt, Heizraum', '', '', 'TK', 0.0, '0.0', 'normal', null, null, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Kinderzimmer", false)])]),
    new Sensor('0002.10, Taster 1 fach, Heizraum', '', '', 'TA', 0.0, '0.0', 'gray', null, null, [new FilterCategory("Floor", [new Keyword("1. Stock", false)]), new FilterCategory("Room", [new Keyword("Kinderzimmer", false)])]),
    new Sensor('0002.11, Digitaler Eingang, Heizraum', '', '', 'DI', 0.0, '0.0', 'normal', null, null, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Esszimmer", false)])]),
    new Sensor('0002.12, Digitaler Eingang, Heizraum', '', '', 'DI', 0.0, '0.0', 'normal', null, null, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Flur", false)])]),
    new Sensor('0002.13, Rauchmelder, Heizraum', '', '', 'AL', 0.0, '0.0', 'normal', null, null, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Küche", false)])]),
    new Sensor('0002.14, Fensterkontakt, Holzraum', '', '', 'FK', 0.0, '0.0', 'normal', null, null, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Kinderzimmer", false)])]),
    new Sensor('0002.15, Taster 1 fach, Holzraum', '', '', 'TA', 0.0, '0.0', 'normal', null, null, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Küche", false)])]),
    new Sensor('0002.16, Wasserstand voll, Holzraum', '', '', 'DI', 0.0, '0.0', 'normal', null, null, [new FilterCategory("Floor", [new Keyword("1. Stock", false)]), new FilterCategory("Room", [new Keyword("Flur", false)])]),
    new Sensor('0002.17, Wasserstand Not Aus, Holzraum', '', '', 'DI', 0.0, '0.0', 'normal', null, null, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Esszimmer", false)])]),
    new Sensor('0002.18, Rauchmelder, Heizraum', '', '', 'AL', 0.0, '0.0', 'normal', null, null, [new FilterCategory("Floor", [new Keyword("2. Stock", false)]), new FilterCategory("Room", [new Keyword("Bad", false)])]),
    new Sensor('0002.19, Türkontakt, Flur KG', '', '', 'TK', 0.0, '0.0', 'normal', null, null, [new FilterCategory("Floor", [new Keyword("1. Stock", false)]), new FilterCategory("Room", [new Keyword("Esszimmer", false)])]),
  ];

  constructor() { }

  getActuators(): Actuator[] {
    return this.actuators;
  }

  getSensors(): Sensor[] {
    return this.sensors;
  }
}
