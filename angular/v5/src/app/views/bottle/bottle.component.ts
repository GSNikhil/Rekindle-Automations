import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Bottle } from '../../shared/bottle.model';
// import {MatButtonModule, MatCheckboxModule, MatSlider} from '@angular/material';

@Component({
  selector: 'app-bottle',
  templateUrl: './bottle.component.html',
  styleUrls: ['./bottle.component.css']
})

export class BottleComponent implements OnInit, OnChanges {

  // public value = matSlider.value;
  public color = "pink";
  public emptyHeight = "50%";
  public fillHeight = "50%";
  public vol = 0;
  @Input() volRemaining: number;
  @Input() bottle: Bottle;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.vol = 100 - this.bottle.volRemaining;
    this.fillHeight = this.bottle.volRemaining + "%";
    this.emptyHeight = this.vol + "%";

    console.log("Hey there!", this.bottle.volRemaining);
    if(this.bottle.volRemaining >= 50)
        this.color = "green";
    else if(this.bottle.volRemaining >= 20 && this.bottle.volRemaining < 50)
      this.color = "yellow";
    else
      this.color = "red";

  }

  log(volRemaining){
    this.vol = 100 - volRemaining;
    this.fillHeight = volRemaining + "%";
    this.emptyHeight = this.vol + "%";

    console.log("Hey there!", volRemaining);
    if(volRemaining >= 50)
        this.color = "green";
    else if(volRemaining >= 20 && volRemaining < 50)
      this.color = "yellow";
    else
      this.color = "red";
  }

}