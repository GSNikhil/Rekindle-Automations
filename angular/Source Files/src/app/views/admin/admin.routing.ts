import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SegmentsComponent } from './segments/segments.component';
import { SegmentTypeComponent } from './segment-type/segment-type.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { UsersComponent } from './users/users.component';
import { BottleTypesComponent } from './bottle-types/bottle-types.component';
import { DeviceComponent } from './device/device.component';
import { BottleComponent } from './bottle/bottle.component';

const routes: Routes = [
    {
      path: '',
      data: {
        title: 'Admin'
      },
      children: [
        {
            path: 'segment-type',
            component: SegmentTypeComponent,
            data: {
            title: 'Segment Type'
            }
        },
        {
            path: 'segments',
            component: SegmentsComponent,
            data: {
            title: 'Segments'
            }
        },
        {
            path: 'user-group',
            component: UserGroupComponent,
            data: {
            title: 'User Group'
            }
        },
        {
            path: 'users',
            component: UsersComponent,
            data: {
            title: 'Users'
            }
        },
        {
            path: 'bottle-type',
            component: BottleTypesComponent,
            data: {
            title: 'Bottle Type'
            }
        },
        {
            path: 'bottle',
            component: BottleComponent,
            data: {
            title: 'Bottle'
            }
        },
        {
            path: 'device',
            component: DeviceComponent,
            data: {
            title: 'Device'
            }
        }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
