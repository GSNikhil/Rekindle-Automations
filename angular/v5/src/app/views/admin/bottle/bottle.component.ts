import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { DataTableResource } from 'angular5-data-table';
import { Bottle } from '../../../shared/bottle.model';
import { BottleType } from '../../../shared/bottleType.model';
import { Segment } from '../../../shared/segment.model';

@Component({
  templateUrl: './bottle.component.html'
})
export class BottleComponent implements OnInit {

  bottles : Bottle[] = [];
  segments : Segment[] = [];
  types: BottleType[] = [];
  limits = [10, 20, 40, 80];
  itemResource = new DataTableResource(this.bottles);
  items = [];
  itemCount = 0;
  edit = false;
  btl_code : any;
  btl_name: any;
  btl_segment: any;
  btl_type: any;
  bottleExists: boolean = false;
  selectedItem: Bottle;

  constructor(private data: DataService){
    this.itemResource.count().then(count => this.itemCount = count);
  }

  reloadItems(params) {
    this.itemResource = new DataTableResource(this.bottles);  
    this.itemResource.query(params).then(items => this.items = items);
}

  ngOnInit(){
    this.bottles = this.data.bottles;
    this.segments = this.data.segments;
    this.types = this.data.bottleType;
    this.itemResource = new DataTableResource(this.bottles);  
  }

  onEdit(item){
    this.edit = true;
    this.btl_code = item.btl_code;
    this.btl_name = item.btl_name;
    this.btl_segment = item.btl_segment;
    this.btl_type = item.btl_type;
    this.selectedItem = item;
  }

  onAdd(){
    this.edit = false;
    this.btl_code = "";
    this.btl_name = "";
  }

  onAddBottleType(){
    if(this.edit){
      this.bottleExists = false;
      for(var i = 0; i < this.data.bottles.length; i++)
      {
          if(this.doesBottleExist(i))
          {
            this.data.bottles.splice(i, 1);
            this.bottleExists = true;
            this.data.bottles.push(new Bottle(this.btl_code, this.btl_name, this.btl_segment, this.btl_type, 21));
            break;
          }
      }
    }
    else{
      this.data.bottles.push(new Bottle(this.btl_code, this.btl_name, this.btl_segment, this.btl_type, 22));
    }
  }

  doesBottleExist(idx: number){
    return this.data.bottles[idx].btl_code === this.selectedItem.btl_code && 
          this.data.bottles[idx].btl_name === this.selectedItem.btl_name && 
          this.data.bottles[idx].btl_segment === this.selectedItem.btl_segment && 
          this.data.bottles[idx].btl_type === this.selectedItem.btl_type;
  }


}
