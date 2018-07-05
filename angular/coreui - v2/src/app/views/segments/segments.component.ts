import { Component, OnInit } from '@angular/core';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import { DataService } from '../../services/data.service';
import { Segment } from '../../shared/segment.model';
import { DataTableResource } from 'angular5-data-table';


@Component({
  templateUrl: 'segments.component.html'
})
export class SegmentsComponent implements OnInit {

    segments: Segment[] = [];
    itemResource = new DataTableResource(this.segments);
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
      this.segments = this.data.segments;
      this.itemResource = new DataTableResource(this.segments);  
    }
}
