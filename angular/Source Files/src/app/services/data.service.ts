import { Injectable } from '@angular/core';
import { Segment } from '../shared/segment.model';
import { User } from '../shared/user.model';
import { Bottle } from '../shared/bottle.model';
import { SegmentType } from '../shared/segmentType.model';
import { UserGroup } from '../shared/userGroup.model';
import { BottleType } from '../shared/bottleType.model';

@Injectable()
export class DataService {

  types = ["Hospital", "Block", "Wing", "Floor", "Room", "Bed"];
  segmentType : SegmentType[] = [new SegmentType(1021, "Hello", "Floor"), new SegmentType(1021, "Heo", "Ber")];
  segments: Segment[] = [ new Segment(1, "HCG", "Hos", "Hospital"),  new Segment(2, "Jaa", "Hospital", "Hello")];

  //User Related
  users: any[] = [];
  userGroups: UserGroup[] = [new UserGroup(23, "Nurse")];

  //Bottle Related
  bottles: Bottle[] = [new Bottle(1, "Wa", 19), new Bottle(2, "Na", 34), new Bottle(2, "Na", 90), new Bottle(2, "Na", 13), new Bottle(2, "Na", 70), new Bottle(2, "Na", 45), new Bottle(1, "Wa", 19), new Bottle(2, "Na", 34), new Bottle(2, "Na", 90), new Bottle(2, "Na", 13), new Bottle(2, "Na", 70), new Bottle(2, "Na", 45)];
  bottleType : BottleType[] = [];

  hospitalName: string;

  //----------------------------------------------------------------------

  addUser(userName, segment){
   this.users.push(new User(userName, segment));
    console.log(this.users);
  }

  removeUser(index: number){
    this.users.splice(index, 1);
    console.log(this.users);
  }


  // ---------------------------------------------------------------------
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
  // ---------------------------------------------------------------------------

  updateFlowValue(flow){
    this.flowValue = flow;
    console.log(this.flowValue);
  }
}
