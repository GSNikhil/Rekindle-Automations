import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-flow-calculations',
  templateUrl: './flow-calculations.component.html'
})
export class FlowCalculationsComponent implements OnInit {
  flowValue: number;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  onChange(){
    this.data.updateFlowValue(this.flowValue);
  }

}
