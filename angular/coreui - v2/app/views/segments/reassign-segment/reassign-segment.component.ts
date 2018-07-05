import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Segment } from '../../../shared/segment.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reassign-segment',
  templateUrl: './reassign-segment.component.html'
})
export class ReassignSegmentComponent implements OnInit {

  segments: Segment[] = [];
  oldParentName: string;
  oldSegmentName: string;
  segmentName: string;
  parent: string;
  segmentExists: boolean;
  i: number;

  constructor(private data: DataService) {
    this.segments = this.data.segments;
   }

  ngOnInit() {
  }

  onReassignSegment(){
    console.log("Called");
    this.segmentExists = false;
    for(this.i = 0; this.i < this.data.segments.length; this.i++)
    {
        if(this.doesSegmentExist(this.i))
        {
          this.data.removeSegment(this.i);
          this.segmentExists = true;
          this.data.addSegment(this.segmentName, this.parent);
          console.log(this.data.segments);
          break;
        }
    }
  }

  doesSegmentExist(idx: number){
    return this.data.segments[idx].name === this.oldSegmentName && this.data.segments[idx].parent === this.oldParentName
 }

}
