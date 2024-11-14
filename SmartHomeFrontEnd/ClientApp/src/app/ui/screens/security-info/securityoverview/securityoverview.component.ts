import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Actuator } from '../../../../models/devices/Actuator';
import { Sensor } from '../../../../models/devices/Sensor'
import { FilterHotkeyService } from './../../../tools/filter-hotkey/filter-hotkey.service';


@Component({
  selector: 'app-security-info',
  templateUrl: './securityoverview.component.html',
  styleUrls: ['./securityoverview.component.css']
})

export class SecurityInfoComponent implements OnInit {

  actors: Actuator[] = [
    new Actuator("Lichter", '', '', false, '', null, null, null, '', '', 2, 52),
    new Actuator("Jalousien", '', '', false, '', null, null, null, '', '', 0, 0),
    new Actuator("Heizungen", '', '', false, '', null, null, null, '', '', 0, 16),
    new Actuator("Lüftungen", '', '', false, '', null, null, null, '', '', 0, 0,),
    new Actuator("Lüftungsklappen", '', '', false, '', null, null, null, '', '', 0, 2,),
    new Actuator("Türen versperrt", '', '', false, '', null, null, null, '', '', 0, 0,),
    new Actuator("Garagentor offen", '', '', false, '', null, null, null, '', '', 0, 0,),
    new Actuator("Pumpen", '', '', false, '', null, null, null, '', '', 1, 7,),
    new Actuator("Steckdosen", '', '', false, '', null, null, null, '', '', 4, 23,),
    new Actuator("Geräte", '', '', false, '', null, null, null, '', '', 0, 0,),
  ];

  sensors: Sensor[] = [
    new Sensor("Alarm", '', '', '', null, '', '', 6, 0),
    new Sensor("Bewegungsmelder", '', '', '', null, '', '', 0, 6),
    new Sensor("Türen offen", '', '', '', null, '', '', 9, 0),
    new Sensor("Garagentor offen", '', '', '', null, '', '', 0, 0),
    new Sensor("Fenster", '', '', '', null, '', '', 14, 0),
    new Sensor("Digitaleingänge", '', '', '', null, '', '', 0, 12),
    new Sensor("Dämmerungsschalter", '', '', '', null, '', '', 0, 0),
  ];

  private routeSubscription$: Subscription;
  
  constructor(private hotkeyService: FilterHotkeyService
  ) { }

  ngOnInit() {
    this.hotkeyService.filterHotKeyShow$.next(false);
  }

  ngOnDestroy(): void {
    this.hotkeyService.filterHotKeyShow$.next(true);
  }
}
