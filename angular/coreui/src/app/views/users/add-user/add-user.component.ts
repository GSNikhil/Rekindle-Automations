import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { User } from '../../../shared/user.model';
import { Segment } from '../../../shared/segment.model';


@Component({
    templateUrl: './add-user.component.html'
})

export class AddUserComponent implements OnInit{

    userName: string;
    segment: string;
    segments: Segment[] = [];

    constructor(private data: DataService){
        this.segments = data.segments;
    }

    ngOnInit(){
        
    }

    onAddUser()
    {
        this.data.addUser(this.userName, this.segment).subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
    }
}

