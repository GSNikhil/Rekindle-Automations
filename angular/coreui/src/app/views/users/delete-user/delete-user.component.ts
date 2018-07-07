import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Segment } from '../../../shared/segment.model';

@Component({
    templateUrl: './delete-user.component.html'
})

export class DeleteUserComponent implements OnInit{

    userName: string;
    segment: string;
    i: number;
    userExists: boolean;
    segments: Segment[] = [];

    constructor(private data: DataService){
      this.segments = data.segments;
     }

    ngOnInit(){
    }

    deleteUser(){
        console.log("Called");
        this.userExists = false;
        for(this.i = 0; this.i < this.data.users.length; this.i++)
        {
            if(this.doesUserExist(this.i))
            {
              this.data.removeUser(this.i);
              this.userExists = true;
              break;
            }
        }
        if(this.userExists){
          console.log('User Deleted');
        }
        else{
          console.log("User not found!");
        }
      }
    
      doesUserExist(idx: number){
         return this.data.users[idx].name === this.userName && this.data.users[idx].segment === this.segment
      }
}

