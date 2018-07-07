import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Segment } from '../../../shared/segment.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-segment',
  templateUrl: './delete-segment.component.html'
})
export class DeleteSegmentComponent implements OnInit {
  segments: Segment[];
  segmentName: string = "";
  parentName: string = "";
  i: number;
  segmentExists : boolean = false;

  constructor(private data: DataService) {
    this.segments = data.segments;
   }

  ngOnInit() {
  }

  // obj : Segment = new Segment(this.segmentName, this.parent);

  deleteSegment(){
    console.log("Called");
    this.segmentExists = false;
    for(this.i = 0; this.i < this.data.segments.length; this.i++)
    {
        if(this.doesSegmentExist(this.i))
        {
          this.data.removeSegment(this.i);
          this.segmentExists = true;
          break;
        }
    }

    if(this.segmentExists)
    {
      console.log('Segment Deleted');
    }
    else{
      console.log("Segment not found!");
    }
  }

  doesSegmentExist(idx: number){
     return this.data.segments[idx].name === this.segmentName && this.data.segments[idx].parent === this.parentName
  }

}
