import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { BottleComponent } from '../bottle/bottle.component';
import { Bottle } from '../../shared/bottle.model';
import { DataService } from '../../services/data.service';
import { Segment } from '../../shared/segment.model';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'] 
})
export class DashboardComponent implements OnInit {
  bottles : Bottle[] = [];
  segments : Segment[] = [];
  
  constructor(private data: DataService){
    this.bottles = data.bottles;
    this.segments = data.segments;
    console.log(this.bottles);
  }

 ngOnInit(){
   
 }
}
