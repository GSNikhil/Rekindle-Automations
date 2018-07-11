import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { DataTableResource } from 'angular5-data-table';
import { SegmentType } from '../../../shared/segmentType.model';
import { Segment } from '../../../shared/segment.model';

@Component({
  templateUrl: './segments.component.html'
})
export class SegmentsComponent implements OnInit {

    segmentTypes: SegmentType[] = [];
    segments : Segment[] = [];
    itemResource = new DataTableResource(this.segments);
    items = [];
    itemCount = 0;
    edit = false;
    sg_code : any;
    sg_name: any;
    sg_parent: any;
    sg_type: any;
    types = [];
    segmentExists: boolean = false;
    selectedItem: SegmentType;

    constructor(private data: DataService){
      this.itemResource.count().then(count => this.itemCount = count);
    }

    reloadItems(params) {
      this.itemResource = new DataTableResource(this.segments); 
      this.itemResource.query(params).then(items => this.items = items);
  }

    ngOnInit(){
      this.segmentTypes = this.data.segmentType;
      this.segments = this.data.segments;
      this.types = this.data.types;
      this.itemResource = new DataTableResource(this.segments);  
    }

  onEdit(item){
    this.edit = true;
    this.sg_code = item.sg_code;
    this.sg_name = item.sg_name;
    this.sg_parent = item.sg_parent;
    this.sg_type = item.sg_type;
    this.selectedItem = item;
  }

  onAdd(){
    this.edit = false;
    this.sg_code = "";
    this.sg_name = "";
    this.sg_parent = "";
    this.sg_type = "";
  }

  onAddSegment(){
    if(this.edit){
      this.segmentExists = false;
      for(var i = 0; i < this.data.segments.length; i++)
      {
          if(this.doesSegmentExist(i))
          {
            this.data.segments.splice(i, 1);
            this.segmentExists = true;
            this.data.segments.push(new Segment(this.sg_code, this.sg_name, this.sg_parent, this.sg_type));
            break;
          }
      }
    }
    else{
      this.data.segments.push(new Segment(this.sg_code, this.sg_name, this.sg_parent, this.sg_type));
    }
  }

  doesSegmentExist(idx: number){
    return this.data.segments[idx].sg_code === this.selectedItem.st_code && 
    this.data.segments[idx].sg_name === this.selectedItem.st_name && 
    this.data.segments[idx].sg_parent === this.selectedItem.st_parent;
 }
}


