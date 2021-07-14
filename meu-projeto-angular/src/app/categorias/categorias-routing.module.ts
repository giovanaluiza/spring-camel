import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';

const routes: Routes = [
  {path: 'categoria-list', component:CategoriaListComponent},
  {path : 'categoria-form', component : CategoriaFormComponent},
  {path: 'categoria-form/:id', component : CategoriaFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }