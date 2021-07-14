import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonsDetalheComponent } from './pokemons-detalhe/pokemons-detalhe.component';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    PokemonsListComponent,
    PokemonsDetalheComponent
  ],
  imports: [
    CommonModule,
     PokemonsRoutingModule,
    SharedModule
 
  ],
    
  exports : [
    PokemonsListComponent
    
  ],
}
)


export class PokemonsModule { }
