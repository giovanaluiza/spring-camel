import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { CpfPipe } from '../shared/pipes/cpf.pipe';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UsuarioListComponent,
    UsuarioDetalheComponent,
 
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule
  ],
  exports: [
    UsuarioListComponent
  ]
})
export class UsuariosModule { }
