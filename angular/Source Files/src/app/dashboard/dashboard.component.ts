import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Segment } from '../shared/segment.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  segments : Segment[] = [];

  constructor(private data: DataService) { 

  }

  ngOnInit() {
  }

  // this.segments = this.data.sendSegments();
  // console.log(this.segments);

  

}
