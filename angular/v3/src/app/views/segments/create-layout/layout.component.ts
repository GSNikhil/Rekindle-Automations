import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Segment } from '../../../shared/segment.model';
import { DataService } from '../../../services/data.service';

@Component({
    templateUrl : './layout.component.html'
})
export class CreateLayoutComponent {

    hospitalName: string = '';
    
    segmentTypes = ["", "Block", "Wing", "Floor", "Room"];
    segmentType = "Segment";
    
    segmentName = "";
    parent = '';

    segments: Segment[] = [];

    disabled : boolean = false;
    hidden : boolean = true;

    constructor(private data: DataService){  
        this.segments = data.segments;
        // this.hospitalName = data.hospitalName;
      }

    createHospital(){
        this.disabled = !this.disabled;
        this.data.hospitalName = this.hospitalName;
    }

    onCreate(){
        if(this.parent === "")
            this.parent = this.hospitalName;

        console.log(this.segmentName, this.parent);
        this.data.segments.push(new Segment(this.segmentName, this.parent));
        console.log(this.data.segments);
        this.hidden = !this.hidden;

        setTimeout(() => {
            this.hidden = !this.hidden;
        }, 1500);

        this.parent = '';
        this.segmentName = '';
        
    }

    isDisabled(){
        return this.disabled;
    }   
}