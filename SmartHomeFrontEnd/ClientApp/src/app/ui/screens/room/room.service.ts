import {Injectable} from '@angular/core';
import {BaseTile} from "../../../models/tiles/BaseTile";
import {FilterCategory, Keyword} from "../../../models/Searchable";
import {Floor} from "../../../models/Floor";
import {Actuator, TwoStateActuator, VariableActuator} from "../../../models/devices/Actuator";
import {Sensor, TwoStateSensor, VariableSensor} from "../../../models/devices/Sensor";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  floors: Floor[] = [
    new Floor(
      "Erdgeschoss",
      [
        new BaseTile("Wohnzimmer", null, "/assets/img/rooms/wohnzimmer.png", "/room/", false, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Wohnzimmer", false)])]),
        new BaseTile("Küche", null, "/assets/img/rooms/küche.png", "/room/", false, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Küche", false)])]),
        new BaseTile("Esszimmer", null, "/assets/img/rooms/esszimmer.png", "/room/", false, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Esszimmer", false)])]),
        new BaseTile("Kinderzimmer 1", null, "/assets/img/rooms/girl.png", "/room/", false, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Kinderzimmer", false)])]),
        new BaseTile("Kinderzimmer 2", null, "/assets/img/rooms/boy.png", "/room/", false, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Kinderzimmer", false)])]),
        new BaseTile("Bad", null, "/assets/img/rooms/bad.png", "/room/", false, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Bad", false)])]),
        new BaseTile("Flur", null, "/assets/img/rooms/flur.png", "/room/", false, [new FilterCategory("Floor", [new Keyword("Erdgeschoss", false)]), new FilterCategory("Room", [new Keyword("Flur", false)])]),
      ]
    ),
    new Floor(
      "1. Stock",
      [
        new BaseTile("Schlafzimmer", null, "/assets/img/rooms/schlafzimmer.png", "/room/", false, [new FilterCategory("Floor", [new Keyword("1. Stock", false)]), new FilterCategory("Room", [new Keyword("Schlafzimmer", false)])])
      ]
    )
  ];

  private actuators: Actuator[] = [
    new TwoStateActuator('Fernseher', '/assets/img/rooms/fernseher.png', '/assets/img/rooms/fernseher2.png', true,'',null,null,null,'','',null,null, false),
    new TwoStateActuator('Hintergrundbeleuchtung', '/assets/img/rooms/lampOn.png', '/assets/img/rooms/beleuchtung.png', true,'',null,null,null,'','',null,null, false),
    new VariableActuator('Heizung', '/assets/img/rooms/radiator.png', '/assets/img/rooms/radiator.png', 0, 100, 5, 20, '%', true,'',null,null,null,'','',null,null),
    new VariableActuator('Beleuchtung', '/assets/img/rooms/LED.png', '/assets/img/rooms/LEDoff.png', 0, 100, 10, 0, '%', true,'',null,null,null,'','',null,null),
    new VariableActuator('Jalousien', '/assets/img/rooms/jalousien.png', '/assets/img/rooms/jalousienOff.png', 0, 100, 10, 0, '%', true,'',null,null,null,'','',null,null)
  ];

  private sensors: Sensor[] = [
    new TwoStateSensor('Fenster 1', '/assets/img/rooms/fensterOffen.png', '/assets/img/rooms/fenster.png', false,'',null,'','',null,null),
    new TwoStateSensor('Fenster 2', '/assets/img/rooms/fensterOffen.png', '/assets/img/rooms/fenster.png', true,'',null,'','',null,null),
    new VariableSensor('Temperatursensor', '/assets/img/rooms/temperatur.png', '/assets/img/rooms/temperaturOff.png',21, "°C",'',null,'','',null,null)
  ];

  constructor() {
  }

  // private getKeywords(): FilterItem[] {
  //   let keywords: FilterItem[] = [];
  //   this.rooms.forEach(room => {
  //     room.keywords.forEach(keyword => {
  //       keywords.push(keyword);
  //     });
  //   });
  //
  //   return keywords;
  // }

  // getFloors(): string[] {
  //   let floors: string[] = [];
  //   this.rooms.forEach(room => {
  //     room.filterCategories.filter(it => it.category == "Floor").forEach(category => {
  //       category.keywords.forEach(keyword => {
  //         if (!floors.includes(keyword.keyword)) {
  //           floors.push(keyword.keyword);
  //         }
  //       });
  //     });
  //   });
  //   return floors;
  // }

  // getRoomsOfFloor(floor: string): BaseTile[] {
  //   let roomsOfFloor: BaseTile[] = [];
  //   this.rooms.forEach(room => {
  //     room.filterCategories.filter(it => it.category == "Floor").forEach(category => {
  //       if (category.keywords.map(it => it.keyword).includes(floor)) {
  //         roomsOfFloor.push(room);
  //       }
  //     });
  //   });
  //   return roomsOfFloor;
  // }

  getFloors(): Floor[] {
    return this.floors;
  }

  getActuatorsOfRoom(roomId: string): Actuator[] {
    return this.actuators;
  }

  getSensorsOfRoom(roomId: string): Sensor[] {
    return this.sensors;
  }
}
