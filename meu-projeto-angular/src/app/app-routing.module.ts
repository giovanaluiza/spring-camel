import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { PokemonGuardService } from './shared/services/pokemon-guard.service';

const routes: Routes = [
   { path:'primeiro', component: PrimeiroComponent },
  { path: 'pokemons', loadChildren: () => import('./pokemons/pokemons.module').then(m => m.PokemonsModule),canActivate:[PokemonGuardService] },
  { path: 'produtos-categorias', loadChildren: () => import('./produtos-categorias/produtos-categorias.module').then(m => m.ProdutosCategoriasModule)  },
  { path:'usuarios', loadChildren:() => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)  },
  {path: 'crud',loadChildren:() => import('./crud/crud.module').then(m=>m.CrudModule) },
  { path: 'categorias', loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasModule)  },
  { path: 'formularios', loadChildren: () => import('./formularios/formularios.module').then(m => m.FormulariosModule)  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) }, 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
