import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddSegmentComponent } from './dashboard/add-segment/add-segment.component';
import { DeleteSegmentComponent } from './dashboard/delete-segment/delete-segment.component';
import { FlowCalculationsComponent } from './dashboard/flow-calculations/flow-calculations.component';
import { ReassignSegmentComponent } from './dashboard/reassign-segment/reassign-segment.component';

const routes: Routes = [
  { path: '', component: FormComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-segment', component: AddSegmentComponent},
  { path: 'delete-segment', component: DeleteSegmentComponent},
  { path: 'reassign-segment', component: ReassignSegmentComponent},
  { path: 'flow-calc', component: FlowCalculationsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingModule = [
  DashboardComponent,
  FormComponent, 
  AddSegmentComponent, 
  DeleteSegmentComponent, 
  FlowCalculationsComponent,
  ReassignSegmentComponent
];
