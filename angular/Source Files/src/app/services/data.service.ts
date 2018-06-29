import { Injectable } from '@angular/core';
import { Segment } from '../shared/segment.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  segments: Segment[] = [];

  addSegment(segmentName, parent){
    this.segments.push(new Segment(segmentName, parent));
    // console.log(this.segments);
  }

  sendSegments(){
    return this.segments;
  }
}
