import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';
import {  DataTableResource } from 'angular5-data-table';
import { DataService } from '../../services/data.service';

@Component({
    templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit{

    users: User[] = [];
    itemResource = new DataTableResource(this.users);
    items = [];
    itemCount = 0;

    constructor(private data: DataService){
        console.log(this.itemResource);
        this.itemResource.count().then(count => this.itemCount = count);
      }
  
      reloadItems(params) {
        this.itemResource.query(params).then(items => this.items = items);
    }
  
      ngOnInit(){
        this.users = this.data.users;
        this.itemResource = new DataTableResource(this.users);  
      }
}