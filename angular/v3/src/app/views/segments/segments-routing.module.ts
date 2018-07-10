import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SegmentsComponent } from './segments.component';
import { AddSegmentComponent } from './add-segment/add-segment.component';
import { DeleteSegmentComponent } from './delete-segment/delete-segment.component';
import { ReassignSegmentComponent } from './reassign-segment/reassign-segment.component';
import { FlowCalculationsComponent } from './flow-calculations/flow-calculations.component';
import { CreateLayoutComponent } from './create-layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: SegmentsComponent,
    data: {
      title: 'Segments'
    },
  },
  {
    path: 'delete-segment',
    component: DeleteSegmentComponent,
    data: {
      title: 'Delete Segment'
    }
  },
  {
    path: 'add-segment',
    component: AddSegmentComponent,
    data: {
      title: 'Add Segment'
    }
  },
  {
    path: 'reassign-segment',
    component: ReassignSegmentComponent,
    data: {
      title: 'Reassign Segment'
    }
  },
  {
    path: 'flow-calc',
    component: FlowCalculationsComponent,
    data: {
      title: 'Flow Calculations'
    }
  },
  {
    path: 'segment-data',
    component: CreateLayoutComponent,
    data: {
      title: 'Flow Calculations'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegmentsRoutingModule {}
