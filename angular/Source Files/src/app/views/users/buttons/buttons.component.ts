import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styles: [`
    .btn-group{
      margin:2% 40% 0% 40%;
    }
  `]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
