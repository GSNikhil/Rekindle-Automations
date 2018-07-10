import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {CommonModule} from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BottleComponent } from '../bottle/bottle.component';
import { DataService } from '../../services/data.service';

// import { BottleComponent } from '../bottle/bottle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
  ],
  declarations: [ 
    DashboardComponent,
    BottleComponent
  ],
  providers: [DataService]
})
export class DashboardModule { }
