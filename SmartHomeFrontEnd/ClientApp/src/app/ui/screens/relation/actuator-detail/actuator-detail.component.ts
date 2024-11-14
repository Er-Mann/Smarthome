import {Component, OnInit} from '@angular/core';
import {RelationService} from "../relation.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Relation} from "../Relation";
import {SensorWrapper} from "../SensorWrapper";
import {BaseTile} from "../../../../models/tiles/BaseTile";
import {FilterHotkeyService} from "../../../tools/filter-hotkey/filter-hotkey.service";

@Component({
  selector: 'app-actuator-detail',
  templateUrl: './actuator-detail.component.html',
  styleUrls: ['./actuator-detail.component.css']
})
export class ActuatorDetailComponent implements OnInit {

  private routeSubscription?: Subscription;
  public entry: Relation;

  constructor(private relationsService: RelationService, private activatedRoute: ActivatedRoute, private hotkeyService: FilterHotkeyService) {
  }


  ngOnInit() {
    this.hotkeyService.filterHotKeyShow$.next(false);
    this.getSelectedSensors();
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
     this.entry = this.relationsService.getRealationRowById(params['id']);
     // this.entry.sensors.push(this.getSelectedSensors());
    });
  }
  ngOnDestroy(): void {
    this.hotkeyService.filterHotKeyShow$.next(true);
    console.log("FKT: "+this.entry.operation)
  }

  getSelectedSensors(): SensorWrapper[] {
    return this.relationsService.sensors.filter(it => it.selected);
  }

  private add: BaseTile = new BaseTile('Add', '', '/assets/img/relation/add.png', '', false);

  compares: string[] = [
    '<',
    "<=",
    "=",
    "=>",
    ">"
  ];

  operations: string[] = [
    "&",
    "|"
  ];


  conditions: String[] = [
    "Täglich",
    "Wochende",
    "Wochentage",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag",
  ];

  public onSensorClick(sensor: SensorWrapper) {
    sensor.selected = !sensor.selected;
  }

  public valueChanged(newValue, sensorId,idEntry, input) {
    var entry: Relation = this.relationsService.getAllRellationRows().filter(entry => entry.id == idEntry)[0];
    console.log("ROW ID: " + sensorId);
    console.log("EntryID: " + entry.sensors);
    // console.log("Entry ID: " + idEntry);
    // console.log("Entry Name: " + entry.sensors.filter(sensor => sensor.id == sensorId)[0].id);

    switch (input) {
      case 'minTime':
        console.log("MinTime")
        entry.sensors.filter(sensor => sensor.id == sensorId)[0].minTime = newValue;
        break;
      case 'compareValue':
        // entry.sensors.filter(sensor => sensor.id == id)[0].compareValue = newValue;
        break;
    }
  }
}


