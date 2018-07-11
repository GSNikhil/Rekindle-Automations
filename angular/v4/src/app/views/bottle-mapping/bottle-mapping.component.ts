import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DataTableResource } from 'angular5-data-table';
import { Bottle } from '../../shared/bottle.model';
import { BottleType } from '../../shared/bottleType.model';
import { Segment } from '../../shared/segment.model';

@Component({
  templateUrl: './bottle-mapping.component.html'
})
export class BottleMappingComponent implements OnInit {

  bottleType : BottleType[] = [];
  itemResource = new DataTableResource(this.bottleType);
  items = [];
  itemCount = 0;
  edit = false;
  sg_name: any;
  device: any;
  btl_code : any;
  btl_qty: any;
  btl_flow: any;
  bottleTypeExists: boolean = false;
  selectedItem: BottleType;

  constructor(private data: DataService){
    this.itemResource.count().then(count => this.itemCount = count);
  }

  reloadItems(params) {
    this.itemResource = new DataTableResource(this.bottleType);  
    this.itemResource.query(params).then(items => this.items = items);
}

  ngOnInit(){
    this.bottleType = this.data.bottleType;
    this.itemResource = new DataTableResource(this.bottleType);  
  }

  onEdit(item){
    this.edit = true;
    this.btl_code = item.btl_code;
    this.btl_qty = item.btl_qty;
    this.btl_flow = item.btl_flow;
    this.selectedItem = item;
  }

  onAdd(){
    this.edit = false;
    this.btl_code = "";
    this.btl_qty = "";
    this.btl_flow = "";
  }

  onAddBottleType(){
    if(this.edit){
      this.bottleTypeExists = false;
      for(var i = 0; i < this.data.bottleType.length; i++)
      {
          if(this.doesBottleTypeExist(i))
          {
            this.data.bottleType.splice(i, 1);
            this.bottleTypeExists = true;
            this.data.bottleType.push(new BottleType(this.btl_code, this.btl_qty, this.btl_flow));
            break;
          }
      }
    }
    else{
      this.data.bottleType.push(new BottleType(this.btl_code, this.btl_qty, this.btl_flow));
    }
  }

  doesBottleTypeExist(idx: number){
    return this.data.bottleType[idx].btl_code === this.selectedItem.btl_code && 
          this.data.bottleType[idx].btl_qty === this.selectedItem.btl_qty && 
          this.data.bottleType[idx].btl_flow === this.selectedItem.btl_flow;
  }

}


