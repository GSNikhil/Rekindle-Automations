import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: {
      title: 'Users'
    },
  },
  {
    path: 'delete-user',
    component: DeleteUserComponent,
    data: {
      title: 'Delete User'
    }
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    data: {
      title: 'Add User'
    }
  },
  {
    path: 'edit-user',
    component: EditUserComponent,
    data: {
      title: 'Edit User'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
