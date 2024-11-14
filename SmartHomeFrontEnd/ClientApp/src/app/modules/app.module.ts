import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from '../app.component';

import {MaterialDesignModule} from './material-design.module';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FilterComponent} from '../ui/screens/filter/filter.component';
import {FilterHotkeyComponent} from '../ui/tools/filter-hotkey/filter-hotkey.component';
import {WeatherWidgetComponent} from '../ui/tools/weather-widget/weather-widget.component';

import {registerLocaleData} from '@angular/common';
import localDe from '@angular/common/locales/de';
import {MainComponent} from '../ui/screens/main/main.component';
import {SearchHotkeyComponent} from '../ui/tools/search-hotkey/search-hotkey.component';
import {ToolbarComponent} from '../ui/tools/toolbar/toolbar.component';
import {RoomsComponent} from '../ui/screens/room/rooms/rooms.component';
import {RoomDetailComponent} from '../ui/screens/room/roominfo/roominfo.component';
import {MonitoringComponent} from '../ui/screens/monitoring/monitoring.component';
import {ActuatorTileComponent} from '../ui/screens/tiles/actuator-tile/actuator-tile.component';
import {SensorTileComponent} from '../ui/screens/tiles/sensor-tile/sensor-tile.component';
import {SimpleImageTextTileComponent} from '../ui/screens/tiles/simple-image-text-tile/simple-image-text-tile.component';
import {ChangeableTileComponent} from '../ui/screens/tiles/changeable-tile/changeable-tile.component';
import {StreamTileComponent} from '../ui/screens/tiles/stream-tile/stream-tile.component';
import {SecurityInfoComponent} from '../ui/screens/security-info/securityoverview/securityoverview.component'
import {SensoroverviewComponent} from '../ui/screens/security-info/sensoroverview/sensoroverview.component';
import { SecurityaktorComponent } from '../ui/screens/security-info/securityaktor/securityaktor.component'
import {MatSelectModule} from '@angular/material/select';
import {RelationCreateComponent} from "../ui/screens/relation/relation-create/relation-create.component";
import {ActuatorOverviewComponent} from "../ui/screens/relation/actuator-overview/actuator-overview.component";
import {ActuatorDetailComponent} from "../ui/screens/relation/actuator-detail/actuator-detail.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {MatButtonModule} from "@angular/material/button";
import {SensorOverviewComponent} from "../ui/screens/relation/sensor-overview/sensor-overview.component";
import {MatRadioModule} from "@angular/material/radio";
import {RealtionOverviewComponent} from "../ui/screens/relation/realtion-overview/realtion-overview.component";

registerLocaleData(localDe);

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    FilterHotkeyComponent,
    WeatherWidgetComponent,
    MainComponent,
    SearchHotkeyComponent,
    ToolbarComponent,
    RoomsComponent,
    RoomDetailComponent,
    MonitoringComponent,
    ActuatorTileComponent,
    SensorTileComponent,
    SimpleImageTextTileComponent,
    ChangeableTileComponent,
    StreamTileComponent,
    SecurityInfoComponent,
    SensoroverviewComponent,
    SecurityaktorComponent,
    RelationCreateComponent,
    ActuatorOverviewComponent,
    ActuatorDetailComponent,
    SensorOverviewComponent,
    RealtionOverviewComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    MaterialDesignModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,MatSelectModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    NgxMaterialTimepickerModule,
    MatButtonModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
