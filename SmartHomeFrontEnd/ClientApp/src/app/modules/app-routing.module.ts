import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterComponent } from '../ui/screens/filter/filter.component';
import { RoomsComponent } from '../ui/screens/room/rooms/rooms.component';
import { RoomDetailComponent } from '../ui/screens/room/roominfo/roominfo.component';
import { MainComponent } from '../ui/screens/main/main.component';
import { MonitoringComponent } from '../ui/screens/monitoring/monitoring.component';
import { SecurityInfoComponent } from '../ui/screens/security-info/securityoverview/securityoverview.component';
import { SensoroverviewComponent } from '../ui/screens/security-info/sensoroverview/sensoroverview.component'
import {SecurityaktorComponent} from '../ui/screens/security-info/securityaktor/securityaktor.component';
import {RealtionOverviewComponent} from '../ui/screens/relation/realtion-overview/realtion-overview.component';
import {RelationCreateComponent} from '../ui/screens/relation/relation-create/relation-create.component';
import {ActuatorOverviewComponent } from '../ui/screens/relation/actuator-overview/actuator-overview.component';
import {SensorOverviewComponent } from '../ui/screens/relation/sensor-overview/sensor-overview.component';
import {ActuatorDetailComponent} from '../ui/screens/relation/actuator-detail/actuator-detail.component';
const routes: Routes = [
  { path: 'room/:id', component: RoomDetailComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'monitoring', component: MonitoringComponent },
  { path: 'monitoring/:id', component: MonitoringComponent },
  { path: 'security', component: SecurityInfoComponent },
  { path: 'security/aktor', component: SecurityaktorComponent},
  { path: 'sensoroverview', component: SensoroverviewComponent },
  { path: 'main', component: MainComponent },
  { path: 'relations', component: RealtionOverviewComponent },
  { path: 'relations/create', component: RelationCreateComponent },
  { path: 'relations/create/addactuator', component: ActuatorOverviewComponent },
  { path: 'relations/create/detail/:id/addsensor', component: SensorOverviewComponent },
  { path: 'relations/create/detail/:id', component: ActuatorDetailComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
