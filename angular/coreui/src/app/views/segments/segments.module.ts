// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SegmentsComponent } from './segments.component';
import { AddSegmentComponent } from './add-segment/add-segment.component';
import { DeleteSegmentComponent } from './delete-segment/delete-segment.component';
import { ReassignSegmentComponent } from './reassign-segment/reassign-segment.component';
import { FlowCalculationsComponent } from './flow-calculations/flow-calculations.component';
import { ButtonsComponent } from './buttons/buttons.component';

// Theme Routing
import { SegmentsRoutingModule } from './segments-routing.module';
import { DataTableModule } from 'angular5-data-table';


@NgModule({
  imports: [
    CommonModule,
    SegmentsRoutingModule,
    FormsModule,
    DataTableModule.forRoot()
   
  ],
  declarations: [
    SegmentsComponent,
    AddSegmentComponent,
    DeleteSegmentComponent,
    ButtonsComponent,
    ReassignSegmentComponent,
    FlowCalculationsComponent
  ]
})
export class SegmentsModule {
  

  constructor() { }

 
  

 }
