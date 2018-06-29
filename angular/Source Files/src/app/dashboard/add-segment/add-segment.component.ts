import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-segment',
  templateUrl: './add-segment.component.html',
  styleUrls: ['./add-segment.component.css']
})
export class AddSegmentComponent implements OnInit {
  segmentName: string;
  parent: string;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  onAddSegment(){
    this.data.addSegment(this.segmentName, this.parent);
  }

}
