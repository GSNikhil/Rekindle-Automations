import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { LayoutRoutingModule } from './layout-routing.module';

import { DataService } from '../../services/data.service';
import { CreateLayoutComponent } from './layout.component';


@NgModule({
    imports: [
      CommonModule,
      LayoutRoutingModule,
      FormsModule
    ],
    declarations: [
      CreateLayoutComponent
    ],
    providers: [
      DataService
    ]
  })
  export class SegmentsModule {
    
  
    constructor() { }
  
   
    
  
   }