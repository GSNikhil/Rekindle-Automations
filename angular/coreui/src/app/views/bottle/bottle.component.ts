import { Component, OnInit } from '@angular/core';
// import {MatButtonModule, MatCheckboxModule, MatSlider} from '@angular/material';

@Component({
  selector: 'app-bottle',
  templateUrl: './bottle.component.html',
  styleUrls: ['./bottle.component.css']
})

export class BottleComponent implements OnInit {

  // public value = matSlider.value;
  public color = "pink";
  public emptyHeight = "50%";
  public fillHeight = "50%";
  public vol = 0;
  constructor() { }

  ngOnInit() {
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