import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { User } from '../../../shared/user.model';
import { Segment } from '../../../shared/segment.model';

@Component({
    templateUrl: './edit-user.component.html'
})

export class EditUserComponent implements OnInit{

    users: User[] = [];
    oldUserName: string;
    oldSegmentName: string;
    userName: string;
    segment: string;
    userExists: boolean;
    i: number;
    segments: Segment[] = [];

    constructor(private data: DataService){
        this.users = data.users;
        this.segments = data.segments;
    }

    ngOnInit(){    
    }

    onEditUser(){
        console.log("Called");
    this.userExists = false;
    for(this.i = 0; this.i < this.data.users.length; this.i++)
    {
        if(this.doesUserExist(this.i))
        {
          this.data.removeUser(this.i);
          this.userExists = true;
          this.data.addUser(this.userName, this.segment);
          console.log(this.data.users);
          break;
        }
    }
    }

    doesUserExist(idx: number){
        return this.data.users[idx].name === this.oldUserName && this.data.users[idx].segment === this.oldSegmentName
     }


}

