import {Component, OnDestroy, OnInit} from '@angular/core';
import {Actuator} from "../../../../models/devices/Actuator";
import {RelationService} from "../relation.service";
import {ActuatorWrapper} from "../ActuatorWrapper";
import {RoomService} from "../../room/room.service";
import {FilterService} from "../../filter/filter.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-actuator-overview',
  templateUrl: './actuator-overview.component.html',
  styleUrls: ['./actuator-overview.component.css']
})
export class ActuatorOverviewComponent implements OnInit, OnDestroy {

  filteredActuators: ActuatorWrapper[] = [];

  private filterSubscription?: Subscription;

  constructor(private relationsService: RelationService, private filterService: FilterService) {
    filterService.prepareFilter(relationsService.actuators.map(it => it.actuator));
  }

  ngOnInit() {
    this.filterSubscription = this.filterService.filterChangedSubject.subscribe(() => {
      this.filteredActuators = this.getFilteredActuators();
    });

    this.filteredActuators = this.getFilteredActuators();
  }

  ngOnDestroy(): void {
    if (this.filterSubscription) {
      this.filterSubscription.unsubscribe();
    }
  }

  private getFilteredActuators(): ActuatorWrapper[] {
    let filtered = [];
    this.filterService.getFilteredItems(this.relationsService.actuators.map(it => it.actuator))
      .forEach(filteredActuator => {
        this.relationsService.actuators.forEach(actuator => {
          if (filteredActuator.id === actuator.actuator.id) {
            filtered.push(new ActuatorWrapper(
              actuator.actuator,
              actuator.selected
            ));
          }
        });
      });
    return filtered;
  }

  onActuatorClick(filterActuator: ActuatorWrapper) {
    filterActuator.selected = !filterActuator.selected;
    this.relationsService.actuators.filter(it => it.actuator.id === filterActuator.actuator.id)[0].selected = filterActuator.selected;
  }

}
