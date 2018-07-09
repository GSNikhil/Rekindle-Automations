import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    templateUrl : './layout.component.html'
})
export class CreateLayoutComponent {
    wings: number;
    hospitalName: string = '';
    floorsInWing = [];
    floors = [];
    floor: number;


    wingRange(num)
    {
        return new Array(num);
    }

    createHospital(name){
        this.hospitalName = name;
        console.log(this.hospitalName);
    }

    createWings(no){
        this.wings = no;
        console.log(this.wings);
        this.floorsInWing = [];
        for(var i = 0; i < this.wings; i++)
        {
            this.floorsInWing.push(i);
        }
    }

    addFloors(floor){
        this.floors.push(floor);
    }
}