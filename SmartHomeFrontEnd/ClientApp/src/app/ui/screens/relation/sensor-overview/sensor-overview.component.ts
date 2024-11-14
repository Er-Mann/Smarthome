import {Component, OnInit} from '@angular/core';
import {SensorWrapper} from "../SensorWrapper";
import {RelationService} from "../relation.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {Relation} from "../Relation";
import {SensorRelations} from "../SensorRelations";
import {Sensor} from "../../../../models/devices/Sensor";
import {FilterService} from "../../filter/filter.service";
import {ActuatorWrapper} from "../ActuatorWrapper";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-sensor-overview',
  templateUrl: './sensor-overview.component.html',
  styleUrls: ['./sensor-overview.component.css']
})
export class SensorOverviewComponent implements OnInit {

  private routeSubscription?: Subscription;
  private filterSubscription?: Subscription;

  filteredSensors: SensorWrapper[] = [];

  allSensors: SensorWrapper[] = [];
  // selectedSensors: SensorWrapper[] = [];
  // count: number;

  constructor(private relationsService: RelationService, private activatedRoute: ActivatedRoute, private filterService: FilterService) {
    filterService.prepareFilter(relationsService.getAllSensors().map(it => it.sensor));
  }

  ngOnInit() {
    // // this.getAllSensors();
    // this.routeSubscription = this.activatedRoute.params.subscribe(params => {
    //   // this.getCountofSelectedSensors(params['id']);
    // });

    this.filterSubscription = this.filterService.filterChangedSubject.subscribe(() => {
      this.filteredSensors = this.getFilteredSensors();
    });

    this.filteredSensors = this.getFilteredSensors();
  }

  private getFilteredSensors(): SensorWrapper[] {
    let filtered = [];
    this.filterService.getFilteredItems(this.relationsService.getAllSensors().map(it => it.sensor))
      .forEach(filteredSensor => {
        this.relationsService.getAllSensors().forEach(sensor => {
          if (filteredSensor.id === sensor.sensor.id) {
            filtered.push(new SensorWrapper(
              sensor.sensor,
              sensor.selected
            ));
          }
        });
      });
    return filtered;
  }

  canSelectSensor(sensor: SensorWrapper): boolean {
    if (sensor.selected) {
      return true;
    } else {
      return this.relationsService.sensors.filter(it => it.selected).length < 5;
    }
  }

  onSensorClick(filteredSensor: SensorWrapper) {
    filteredSensor.selected = !filteredSensor.selected;
    this.relationsService.sensors.filter(it => it.sensor.id === filteredSensor.sensor.id)[0].selected = filteredSensor.selected;
  }
}
