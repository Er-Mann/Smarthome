import {Injectable} from '@angular/core';
import {AnimatedTile} from "../../../models/tiles/AnimatedTile";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  // mainTileItems$ = new Subject<MainTile[]>();

  private tiles: AnimatedTile[] = [
    new AnimatedTile("Räume", null, "/assets/img/main-tile/door.png", "/rooms", null),
    new AnimatedTile("Geräte", null, "/assets/img/main-tile/devices.png", "", null),
    new AnimatedTile("Sicherheit", null, "/assets/img/main-tile/safteyLock.png", "/security", null),
    new AnimatedTile("Beziehungen", null, "/assets/img/main-tile/relations.png", '/relations', null),
    new AnimatedTile("Szenarien", null, "/assets/img/main-tile/szenario.png", "", null),
    new AnimatedTile("Überwachung", null, "/assets/img/main-tile/securityCamera.png", "/monitoring", null)
  ];

  constructor() {
  }

  public getAllTiles(): AnimatedTile[] {
    return this.tiles;
  }

  public updateMonitoringTile(monitoringTile: AnimatedTile) {
    monitoringTile.referenceTo = "/monitoring/" + monitoringTile.id;
    if (monitoringTile.pinned) {
      this.tiles.push(monitoringTile);
    } else {
      this.tiles = this.tiles.filter(item => item.id != monitoringTile.id);
    }
  }
}
