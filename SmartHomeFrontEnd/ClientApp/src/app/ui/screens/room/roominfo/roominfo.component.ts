import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilterService} from '../../filter/filter.service';
import {Actuator} from "../../../../models/devices/Actuator";
import {Sensor} from "../../../../models/devices/Sensor";
import {RoomService} from "../room.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-room-detail',
  templateUrl: './roominfo.component.html',
  styleUrls: ['./roominfo.component.css']
})
export class RoomDetailComponent implements OnInit, OnDestroy {

  visibleActuators: Actuator[] = [];
  visibleSensors: Sensor[] = [];

  private routeSubscription?: Subscription;
  private filterSubscription?: Subscription;

  constructor(private roomService: RoomService, private filterService: FilterService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      let roomId = params['id'];
      this.filterService.prepareFilter([].concat(this.roomService.getActuatorsOfRoom(roomId), this.roomService.getSensorsOfRoom(roomId)))
    });

    this.filterSubscription = this.filterService.filterChangedSubject.subscribe(() => {
      this.visibleActuators = this.getActuators();
      this.visibleSensors = this.getSensors();
    });

    this.visibleActuators = this.getActuators();
    this.visibleSensors = this.getSensors();
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }

    if (this.filterSubscription) {
      this.filterSubscription.unsubscribe();
    }
  }

  public getActuators(): Actuator[] {
    return this.filterService.getFilteredItems(this.roomService.getActuatorsOfRoom(""));
  }

  public getSensors(): Sensor[] {
    return this.filterService.getFilteredItems(this.roomService.getSensorsOfRoom(""));
  }
}
