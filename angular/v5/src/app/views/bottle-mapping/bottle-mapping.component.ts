import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DataTableResource } from 'angular5-data-table';
import { Bottle } from '../../shared/bottle.model';
import { BottleType } from '../../shared/bottleType.model';
import { Segment } from '../../shared/segment.model';
import { BottleMap } from '../../shared/bottleMap.model';

@Component({
  templateUrl: './bottle-mapping.component.html'
})
export class BottleMappingComponent implements OnInit {

  bottles : Bottle[] = [];
  bottleMap : BottleMap[] = [];
  segments: Segment[] = [];
  devices;
  itemResource = new DataTableResource(this.bottleMap);
  items = [];
  itemCount = 0;
  edit = false;
  sg_name: any;
  device: any;
  btl_code : any;
  btl_qty: any;
  btl_flow: any;
  bottleMapExists: boolean = false;
  selectedItem: BottleMap;

  constructor(private data: DataService){
    this.itemResource.count().then(count => this.itemCount = count);
  }

  reloadItems(params) {
    this.itemResource = new DataTableResource(this.bottleMap);  
    this.itemResource.query(params).then(items => this.items = items);
}

  ngOnInit(){
    this.bottles = this.data.bottles;
    this.bottleMap = this.data.bottleMap;
    this.segments = this.data.segments;
    this.devices = this.data.devices;
    this.itemResource = new DataTableResource(this.bottleMap);  
  }

  onEdit(item){
    this.edit = true;
    this.btl_code = item.btl_code;
    this.btl_qty = item.btl_qty;
    this.btl_flow = item.btl_flow;
    this.sg_name = item.sg_name;
    this.device = item.sg_name;
    this.selectedItem = item;
  }

  onAdd(){
    this.edit = false;
    this.btl_code = "";
    this.btl_qty = "";
    this.btl_flow = "";
    this.device = "";
    this.sg_name = "";
  }

  onConfirm(){
      var idx = this.data.findBottleMap(this.btl_code);
      console.log(idx);
      this.btl_qty = this.data.bottles[idx].volRemaining;
      this.btl_flow = this.data.bottles[idx].btl_type;
  }

  onAddBottleType(){
    window.scrollTo(0,0);
    if(this.edit){
      this.bottleMapExists = false;
      for(var i = 0; i < this.data.bottleMap.length; i++)
      {
          if(this.doesBottleMapExist(i))
          {
            this.data.bottleMap.splice(i, 1);
            this.bottleMapExists = true;
            this.data.bottleMap.push(new BottleMap(this.sg_name, this.device, this.btl_code));
            break;
          }
      }
    }
    else{
      this.data.bottleMap.push(new BottleMap(this.sg_name, this.device, this.btl_code));
    }
  }

  doesBottleMapExist(idx: number){
    return this.data.bottleMap[idx].btl_code === this.selectedItem.btl_code && 
          this.data.bottleMap[idx].sg_name === this.selectedItem.sg_name && 
          this.data.bottleMap[idx].device === this.selectedItem.device;
  }
}


