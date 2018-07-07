import { Injectable } from '@angular/core';
import { Segment } from '../shared/segment.model';
import { User } from '../shared/user.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from "@angular/http";

@Injectable()
// {
//   providedIn: 'root'
// }
export class DataService {

  constructor(private http: Http) { }
  segments: Segment[] = [new Segment("HCG0", "Hello"),
                          new Segment("HCG2", 'HCG0'),
                        new Segment(159, "None")];

  users: any[] = [new User("Nikhil", "")];
  flowValue: number;
  user: User;

  addUser(userName, segment){
    // this.users.push(new User(userName, segment));
    // console.log(this.users);

    this.user = {"usr_first_name": userName, "usr_usr_dptmt": 2};
    const headers = new Headers({'Content-Type' : 'application/json'});
    return this.http.post("http://52.32.197.118:3000/api/auth/register", this.user, {headers: headers});
  }

  removeUser(index: number){
    this.users.splice(index, 1);
    console.log(this.users);
    // return this.http.delete("http://52.32.197.118:3000/api/user/:_id", this.users[index]._id);
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
