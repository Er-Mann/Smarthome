import { Component, OnDestroy, OnInit } from '@angular/core';
import { Actuator } from '../../../../models/devices/Actuator';
import { FilterService } from '../../filter/filter.service';
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { RoomService } from "../../room/room.service";
import { Floor } from "../../../../models/Floor";
import { FilterCategory, Keyword } from 'src/app/models/Searchable';
import { SecurityServiceService } from '../security-service.service';

@Component({
  selector: 'app-securityaktor',
  templateUrl: './securityaktor.component.html',
  styleUrls: ['./securityaktor.component.css']
})
export class SecurityaktorComponent implements OnInit, OnDestroy {
  private filterSubscription?: Subscription;
  visibleActuators: Actuator[] = [];

  zustands: any = [
    { value: 'Auto ein', viewValue: 'Auto ein' },
    { value: 'Auto aus', viewValue: 'Auto aus' },
    { value: 'Dauer ein', viewValue: 'Dauer ein' },
    { value: 'Dauer aus', viewValue: 'Dauer aus' },
  ];


  constructor(private securityService: SecurityServiceService, private filterService: FilterService) {

  }

  ngOnInit(): void {
    this.filterService.prepareFilter([].concat(this.securityService.getActuators()));

    this.filterSubscription = this.filterService.filterChangedSubject.subscribe(() => {
      this.visibleActuators = this.filterService.getFilteredItems(this.securityService.getActuators());
    });

    this.visibleActuators = this.filterService.getFilteredItems(this.securityService.getActuators());

  }

  ngOnDestroy(): void {
    if (this.filterSubscription) {
      this.filterSubscription.unsubscribe();
    }
  }

  headers = ["Name", "Typ", "Wert", "Dauer", "Feindauer", "Zustand(Wert)", "Zustand(Text)"];

}


