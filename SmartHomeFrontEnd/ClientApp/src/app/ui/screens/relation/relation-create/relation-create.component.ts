import {Component, OnDestroy, OnInit} from '@angular/core';
import {RelationService} from "../relation.service";
import {Actuator} from "../../../../models/devices/Actuator";
import {RelationRow} from "../../../../models/relations/RelationRow";
import {BaseTile} from "../../../../models/tiles/BaseTile";
import {ActuatorWrapper} from "../ActuatorWrapper";
import {Relation} from "../Relation";
import {FilterHotkeyService} from "../../../tools/filter-hotkey/filter-hotkey.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-relation-create',
  templateUrl: './relation-create.component.html',
  styleUrls: ['./relation-create.component.css']
})
export class RelationCreateComponent implements OnInit, OnDestroy {

  constructor(private relationsService: RelationService, private hotkeyService: FilterHotkeyService, private router: Router) {
  }

  private add: BaseTile = new BaseTile('Add', '', '/assets/img/relation/add.png', '', false);

  private functions: string[] = [
    "Auto an",
    "Auto aus",
    "Auto an/aus",
    "Dauer an",
    "Dauer aus"
  ];

  private priorities: number[] = [
    1,
    2,
    3,
    4,
    5
  ];

  public deleteRow(id: string) {
    this.relationsService.newRelations = this.relationsService.newRelations.filter(row => row.id !== id);
  }

  public onAddClick() {
    if (this.relationsService.newRelations.length < 5) {
      this.relationsService.newRelations.push(new Relation());
    }
  }

  public onActuatorClick(actuator: ActuatorWrapper) {
    actuator.selected = !actuator.selected;
  }

  public valueChanged(newValue, id, input) {
    var entry: Relation = this.relationsService.newRelations.filter(entry => entry.id == id)[0];
    switch (input) {
      case 'priority':
        entry.priority = newValue;
        break;
      case 'delay':
        entry.delay = newValue;
        break;
      case 'duration':
        entry.duration = newValue;
        break;
      case 'value':
        entry.value = newValue;
        break;
      case 'name':
        entry.name = newValue;
        break;
    }
  }

  saveRelation() {
    this.relationsService.newRelations.forEach(newRelation => {
      newRelation.actuators.push(...this.relationsService.getSelectedActuators().map(it => it.actuator));
      this.relationsService.relations.push(newRelation);
    });

    this.relationsService.newRelations = [];

    history.go(-1);
  }

  ngOnInit() {
    this.hotkeyService.filterHotKeyShow$.next(false);
  }

  ngOnDestroy(): void {
    this.hotkeyService.filterHotKeyShow$.next(true);
  }

}
