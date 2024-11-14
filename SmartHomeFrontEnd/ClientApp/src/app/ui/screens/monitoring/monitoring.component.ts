import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MonitoringService} from './monitoring.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {FilterService} from '../filter/filter.service';
import {AnimatedTile} from "../../../models/tiles/AnimatedTile";


@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit, OnDestroy {

  currentUrl: String;
  currentTitle: String;

  @ViewChild('videoStream', {static: false})
  videoStream: ElementRef;

  visibleTiles: AnimatedTile[] = [];

  private routeSubscription?: Subscription;
  private filterSubscription?: Subscription;

  constructor(private monitoringService: MonitoringService, private activatedRoute: ActivatedRoute, private filterService: FilterService) {
    filterService.prepareFilter(monitoringService.getAllStreams());
  }

  ngOnInit() {
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      let streams = this.monitoringService.getAllStreams();
      let item: AnimatedTile = streams.filter(item => item.id == params['id'])[0];
      if (item !== undefined) {
        this.focusOnStream(item.name, item.streamingUrl);
      } else {
        this.focusOnStream(streams[0].name, streams[0].streamingUrl);
      }
    });

    this.filterSubscription = this.filterService.filterChangedSubject.subscribe(() => {
      this.visibleTiles = this.getAllStreams();
    });

    this.visibleTiles = this.getAllStreams();
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
    if (this.filterSubscription) {
      this.filterSubscription.unsubscribe();
    }
  }

  getAllStreams(): AnimatedTile[] {
    console.log("Monitoring: get All Streams");
    return this.filterService.getFilteredItems(this.monitoringService.getAllStreams());
  }

  focusOnStream(name: string, url: string): void {
    console.log(url);
    this.currentUrl = url;
    this.currentTitle = name;
    this.videoStream.nativeElement.load();
  }

  onPinClick(id: number): void {
    this.monitoringService.togglePinned(id);
  }
}
