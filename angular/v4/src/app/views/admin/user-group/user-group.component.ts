import { Component, OnInit } from '@angular/core';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import { DataService } from '../../../services/data.service';
import { DataTableResource } from 'angular5-data-table';
import { UserGroup } from '../../../shared/userGroup.model'

@Component({
  templateUrl: './user-group.component.html'
})
export class UserGroupComponent implements OnInit {

  userGroups: UserGroup[] = [];
  itemResource = new DataTableResource(this.userGroups);
  items = [];
  itemCount = 0;
  edit = false;
  gp_code : any;
  gp_name: any;
  groupExists: boolean = false;
  selectedItem: UserGroup;

  constructor(private data: DataService){
    this.itemResource.count().then(count => this.itemCount = count);
  }

  reloadItems(params) {
    this.itemResource = new DataTableResource(this.userGroups);
    this.itemResource.query(params).then(items => this.items = items);
  }

    ngOnInit(){
      this.userGroups = this.data.userGroups;
      this.itemResource = new DataTableResource(this.userGroups);  
    }

  onEdit(item){
    this.edit = true;
    this.gp_code = item.gp_code;
    this.gp_name = item.gp_name;
    this.selectedItem = item;
  }

  onAdd(){
    this.edit = false;
    this.gp_code = "";
    this.gp_name = "";
  }

  onAddGroup(){
    if(this.edit){
      this.groupExists = false;
      for(var i = 0; i < this.data.userGroups.length; i++)
      {
          if(this.doesGroupExist(i))
          {
            this.data.userGroups.splice(i, 1);
            this.groupExists = true;
            this.data.userGroups.push(new UserGroup(this.gp_code, this.gp_name));
            break;
          }
      }
    }
    else{
      this.data.userGroups.push(new UserGroup(this.gp_code, this.gp_name));
    }  
  }

  doesGroupExist(idx: number){
    return this.data.userGroups[idx].gp_code === this.selectedItem.gp_code &&
           this.data.userGroups[idx].gp_name === this.selectedItem.gp_name;
  }

}
