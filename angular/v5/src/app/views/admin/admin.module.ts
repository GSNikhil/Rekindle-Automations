// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { SegmentsComponent } from './segments/segments.component';
import { SegmentTypeComponent } from './segment-type/segment-type.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { UsersComponent } from './users/users.component';
import { BottleTypesComponent } from './bottle-types/bottle-types.component';
import { DeviceComponent } from './device/device.component';
import { BottleComponent } from './bottle/bottle.component';

// Theme Routing
import { AdminRoutingModule } from './admin.routing';
import { DataTableModule } from 'angular5-data-table';

//Service
import { DataService } from '../../services/data.service';
import { User } from '../../shared/user.model';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    DataTableModule.forRoot()
   
  ],
  declarations: [
    AdminComponent,
    SegmentsComponent,
    SegmentTypeComponent,
    UserGroupComponent,
    UsersComponent,
    BottleTypesComponent,
    DeviceComponent,
    BottleComponent

  ],
  providers: [
    DataService
  ]
})
export class AdminModule {
  

  constructor() { }

 
  

 }
