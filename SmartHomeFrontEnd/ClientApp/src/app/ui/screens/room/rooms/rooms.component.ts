import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilterService} from '../../filter/filter.service';
import {RoomService} from "../room.service";
import {BaseTile} from "../../../../models/tiles/BaseTile";
import {Floor} from "../../../../models/Floor";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, OnDestroy {

  visibleFloors: Floor[] = [];

  private filterSubscription?: Subscription;

  constructor(private roomService: RoomService, private filterService: FilterService) {
    this.filterService.prepareFilter([].concat(...roomService.floors.map(it => it.rooms)));
  }

  ngOnInit(): void {
    this.filterSubscription = this.filterService.filterChangedSubject.subscribe(() => {
      this.visibleFloors = this.getFloors();
    });

    this.visibleFloors = this.getFloors();
  }

  ngOnDestroy(): void {
    if (this.filterSubscription) {
      this.filterSubscription.unsubscribe();
    }
  }

  private getFloors(): Floor[] {
    let filteredFloors = [];
    this.roomService.floors.forEach(floor => {
      filteredFloors.push(new Floor(
        floor.name,
        this.filterService.getFilteredItems(floor.rooms)
      ));
    });
    return filteredFloors;
  }
}
