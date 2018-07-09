import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateLayoutComponent } from './layout.component';


const routes: Routes = [
    {
      path: '',
      component: CreateLayoutComponent,
      data: {
        title: 'Create Layout'
      },
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LayoutRoutingModule {}