import { Injectable } from '@angular/core';
import { Segment } from '../shared/segment.model';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  segments: Segment[] = [new Segment("HCG0", "Hello"),
                          new Segment("HCG2", 'HCG0'),
                        new Segment("HCG1", "None")];

  users: User[] = [new User("Nikhil", "")];
  flowValue: number;

  addSegment(segmentName, parent){
    this.segments.push(new Segment(segmentName, parent));
    console.log(this.segments);
  }

  sendSegments(){
    return this.segments;
  }

  removeSegment(index: number){
    this.segments.splice(index, 1);
    console.log(this.segments);
  }

  addUser(userName, segment){
    this.users.push(new User(userName, segment));
    console.log(this.users);
  }

  removeUser(index: number){
    this.users.splice(index, 1);
    console.log(this.users);
  }

  updateFlowValue(flow){
    this.flowValue = flow;
    console.log(this.flowValue);
  }
}
