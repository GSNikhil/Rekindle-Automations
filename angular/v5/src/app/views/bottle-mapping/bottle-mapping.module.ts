// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BottleMappingComponent } from './bottle-mapping.component';

// Theme Routing
import { BottleMappingRoutingModule } from './bottle-mapping.routing';
import { DataTableModule } from 'angular5-data-table';

//Service
import { DataService } from '../../services/data.service';

@NgModule({
  imports: [
    CommonModule,
    BottleMappingRoutingModule,
    FormsModule,
    DataTableModule.forRoot()
   
  ],
  declarations: [
    BottleMappingComponent
  ],
  providers: [
    DataService
  ]
})
export class BottleMappingModule {
  

  constructor() { }

 
  

 }
