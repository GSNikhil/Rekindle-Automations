// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { UsersComponent } from './users.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

// Theme Routing
import { UsersRoutingModule } from './users-routing.module';
import { DataTableModule } from 'angular5-data-table';


@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    DataTableModule.forRoot()
   
  ],
  declarations: [
    ButtonsComponent,
    AddUserComponent,
    DeleteUserComponent,
    EditUserComponent,
    UsersComponent
  ]
})
export class UsersModule {
  

  constructor() { }

 
  

 }
