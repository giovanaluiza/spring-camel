import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ValidarComponent } from './validar/validar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ValidarComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
