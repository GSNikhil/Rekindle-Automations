// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UsersComponent }  from './users.component';
// Theme Routing
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [
   UsersComponent
  ]
})
export class UsersModule { }
