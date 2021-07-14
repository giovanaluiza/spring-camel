import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosCategoriasRoutingModule } from './produtos-categorias-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProdutosCategoriasRoutingModule,
    SharedModule
  ]
})
export class ProdutosCategoriasModule { }
