import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { FormsModule } from '@angular/forms';
import { Segment } from '../../../shared/segment.model';

@Component({
  selector: 'app-add-segment',
  templateUrl: './add-segment.component.html'
})
export class AddSegmentComponent implements OnInit {
  segmentName: string;
  parent: string;
  segments: Segment[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.segments = this.data.segments;
  }

  onAddSegment(){
    this.data.addSegment(this.segmentName, this.parent);
  }

}
