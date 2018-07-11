import { Component, OnInit } from '@angular/core';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import { DataService } from '../../../services/data.service';
import { DataTableResource } from 'angular5-data-table';
import { UserGroup } from '../../../shared/userGroup.model';
import { User } from '../../../shared/user.model';
import { Segment } from '../../../shared/segment.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users : User[] = [];
    segments : Segment[] = [];
    groups : UserGroup[] = [];
    itemResource = new DataTableResource(this.users);
    items = [];
    itemCount = 0;
    edit = false;
    usr_code : any;
    usr_name: any;
    usr_group: any;
    usr_segment : any[];
    userExists: boolean = false;
    selectedItem: User;

    constructor(private data: DataService){
      this.itemResource.count().then(count => this.itemCount = count);
    }

    reloadItems(params) {
      this.itemResource = new DataTableResource(this.users);  
      this.itemResource.query(params).then(items => this.items = items);
  }

    ngOnInit(){
      this.users = this.data.users;
      this.segments = this.data.segments;
      this.groups = this.data.userGroups;
      this.itemResource = new DataTableResource(this.users);  
    }

  onEdit(item){
    this.edit = true;
    this.usr_code = item.usr_code;
    this.usr_name = item.usr_name;
    this.usr_group = item.usr_group;
    this.usr_segment = item.usr_segment;
    this.selectedItem = item;
  }

  onAddUser(){
    this.edit = false;
    this.usr_code = "";
    this.usr_name = "";
  }

  onAddSegmentType(){
    if(this.edit){
      this.userExists = false;
      for(var i = 0; i < this.data.users.length; i++)
      {
          if(this.doesUserExist(i))
          {
            this.data.users.splice(i, 1);
            this.userExists = true;
            this.data.users.push(new User(this.usr_code, this.usr_name, this.usr_group, this.usr_segment));
            break;
          }
      }
    }
    else{
      this.data.users.push(new User(this.usr_code, this.usr_name, this.usr_group, this.usr_segment));
    }
  }

  doesUserExist(idx: number){
    return this.data.users[idx].usr_code === this.selectedItem.usr_code && 
          this.data.users[idx].usr_name === this.selectedItem.usr_name && 
          this.data.users[idx].usr_group === this.selectedItem.usr_group &&
          this.data.users[idx].usr_segment === this.selectedItem.usr_segment;
 }

}
