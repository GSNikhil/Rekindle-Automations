import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BottleMappingComponent } from './bottle-mapping.component';

const routes: Routes = [
  {
    path: '',
    component: BottleMappingComponent,
    data: {
      title: 'Bottle Mapping'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottleMappingRoutingModule {}
