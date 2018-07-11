import { Component, OnInit } from '@angular/core';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import { DataService } from '../../../services/data.service';
import { DataTableResource } from 'angular5-data-table';
import { SegmentType } from '../../../shared/segmentType.model';

@Component({
  templateUrl: './segment-type.component.html'
})
export class SegmentTypeComponent implements OnInit {

    segmentTypes: SegmentType[] = [];
    itemResource = new DataTableResource(this.segmentTypes);
    items = [];
    itemCount = 0;
    edit = false;
    st_code : any;
    st_name: any;
    st_parent: any;
    types = [];
    segmentTypeExists: boolean = false;
    selectedItem: SegmentType;

    constructor(private data: DataService){
      this.itemResource.count().then(count => this.itemCount = count);
    }

    reloadItems(params) {
      this.itemResource = new DataTableResource(this.segmentTypes);  
      this.itemResource.query(params).then(items => this.items = items);
  }

    ngOnInit(){
      this.segmentTypes = this.data.segmentType;
      this.types = this.data.types;
      this.itemResource = new DataTableResource(this.segmentTypes);  
    }

  onEdit(item){
    this.edit = true;
    this.st_code = item.st_code;
    this.st_name = item.st_name;
    this.st_parent = item.st_parent;
    this.selectedItem = item;
  }

  onAddType(){
    this.edit = false;
    this.st_code = "";
    this.st_name = "";
  }

  onAddSegmentType(){
    if(this.edit){
      this.segmentTypeExists = false;
      for(var i = 0; i < this.data.segmentType.length; i++)
      {
          if(this.doesSegmentExist(i))
          {
            this.data.segmentType.splice(i, 1);
            this.segmentTypeExists = true;
            this.data.segmentType.push(new SegmentType(this.st_code, this.st_name, this.st_parent));
            break;
          }
      }
    }
    else{
      this.data.segmentType.push(new SegmentType(this.st_code, this.st_name, this.st_parent));
    }
  }

  doesSegmentExist(idx: number){
    return this.data.segmentType[idx].st_code === this.selectedItem.st_code && this.data.segmentType[idx].st_name === this.selectedItem.st_name && this.data.segmentType[idx].st_parent === this.selectedItem.st_parent;
 }
}
