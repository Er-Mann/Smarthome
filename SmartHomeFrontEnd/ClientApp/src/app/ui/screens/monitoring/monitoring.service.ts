import {Injectable} from '@angular/core';
import {MainService} from '../main/main.service';
import {AnimatedTile} from "../../../models/tiles/AnimatedTile";
import {FilterCategory, Keyword} from "../../../models/Searchable";
import {FilterService} from "../filter/filter.service";

@Injectable({
  providedIn: 'root'
})
export class MonitoringService{

  private streams: AnimatedTile[]=[
    new AnimatedTile("Bad", null, null, null, "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4", false, [new FilterCategory('Location', [new Keyword("Indoor", false)])]),
    // new AnimatedTile("Schlafzimmer", null, null, null, "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4", false, [new FilterCategory('Location', [new Keyword("Indoor", false)])]),
    // new AnimatedTile("Wohnzimmer", null, null, null, "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4", false, [new FilterCategory('Location', [new Keyword("Indoor", false)])]),
    new AnimatedTile("Garage", null, null, null, "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4", false, [new FilterCategory('Location', [new Keyword("Outdoor", false)])]),
    new AnimatedTile("Einfahrt", null, null, null, "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4", false, [new FilterCategory('Location', [new Keyword("Outdoor", false)])]),
    // new AnimatedTile("Garten", null, null, null, "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4", false, [new FilterCategory('Location', [new Keyword("Outdoor", false)])]),
    // new AnimatedTile("Hobbyraum", null, null, null, "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4", false, [new FilterCategory('Location', [new Keyword("Indoor", false)])]),
  ];

  constructor(private mainService: MainService) {
  }

  public getAllStreams() : AnimatedTile[] {
    return this.streams;
  }

  public togglePinned(id: number): void {
    let item: AnimatedTile = this.streams.filter(item => item.id == id)[0];
    item.pinned = !item.pinned;

    this.mainService.updateMonitoringTile(item);
  }
}
