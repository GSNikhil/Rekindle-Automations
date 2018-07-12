import { Injectable } from '@angular/core';
import { Segment } from '../shared/segment.model';
import { User } from '../shared/user.model';
import { Bottle } from '../shared/bottle.model';
import { SegmentType } from '../shared/segmentType.model';
import { UserGroup } from '../shared/userGroup.model';
import { BottleType } from '../shared/bottleType.model';
import { BottleMap } from '../shared/bottleMap.model';

@Injectable()
export class DataService {

  types = ["Hospital", "Block", "Wing", "Floor", "Room", "Bed"];
  segmentType : SegmentType[] = [new SegmentType(1021, "Hello", "Floor"), new SegmentType(1021, "Heo", "Ber")];
  segments: Segment[] = [ new Segment(1, "HCG", "Hos", "Hospital"),  new Segment(2, "Jaa", "Hospital", "Hello")];

  //User Related
  users: any[] = [];
  userGroups: UserGroup[] = [new UserGroup(23, "Nurse")];

  //Bottle Related
  bottles: Bottle[] = [new Bottle(1, "Wa", "Hos", "Type", 19), new Bottle(2, "Wa", "Hos", "Type", 19), new Bottle(3, "Wa", "Hos", "Type", 19), new Bottle(4, "Wa", "Hos", "Type", 19), new Bottle(5, "Wa", "Hos", "Type", 19), new Bottle(1, "Wa", "Hos", "Type", 19), new Bottle(1, "Wa", "Hos", "Type", 19), new Bottle(1, "Wa", "Hos", "Type", 19), new Bottle(1, "Wa", "Hos", "Type", 19), new Bottle(1, "Wa", "Hos", "Type", 19), new Bottle(1, "Wa", "Hos", "Type", 19), new Bottle(1, "Wa", "Hos", "Type", 19)];
  bottleType : BottleType[] = [];

  //Mapping
  bottleMap: BottleMap[] = [];
  devices;

  hospitalName: string;

  //----------------------------------------------------------------------

//   addUser(userName, segment){
//    this.users.push(new User(userName, segment));
//     console.log(this.users);
//   }

  findBottleMap(btl_code){
    for(var i = 0; i < this.bottles.length ; i++){
      if(this.bottles[i].btl_code === btl_code){
        return i;
      }
        
    }
  }

}