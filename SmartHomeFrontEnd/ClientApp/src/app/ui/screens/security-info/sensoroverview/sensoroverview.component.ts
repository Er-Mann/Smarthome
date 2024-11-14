import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Sensor } from '../../../../models/devices/Sensor';
import { FilterService } from '../../filter/filter.service';
import { SecurityServiceService } from '../security-service.service';
@Component({
  selector: 'app-sensoroverview',
  templateUrl: './sensoroverview.component.html',
  styleUrls: ['./sensoroverview.component.css']
})
export class SensoroverviewComponent implements OnInit {
  private filterSubscription?: Subscription;
  visibleSensors: Sensor[] = [];

  constructor(private securityService: SecurityServiceService, private filterService: FilterService) { }

  ngOnInit() {
    this.filterService.prepareFilter([].concat(this.securityService.getSensors()));

    this.filterSubscription = this.filterService.filterChangedSubject.subscribe(() => {
      this.visibleSensors = this.filterService.getFilteredItems(this.securityService.getSensors());
    });

    this.visibleSensors = this.filterService.getFilteredItems(this.securityService.getSensors());
  }

  ngOnDestroy(): void {
    if (this.filterSubscription) {
      this.filterSubscription.unsubscribe();
    }
  }

}
