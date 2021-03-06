import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  styles: [`
  .bg {
    /* The image used */
    background-image: url("https://images.pexels.com/photos/905874/pexels-photo-905874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");

    /* Full height */
    height: 100%; 

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.footer-img{
  height: 3%;
  width: 6%;
}

`]
})
export class RegisterComponent {

  constructor() { }

}
