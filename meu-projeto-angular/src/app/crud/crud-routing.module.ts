import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { CrudListComponent } from './crud-list/crud-list.component';

const routes: Routes = [
  {path : 'crud-list', component: CrudListComponent}, 
  {path: 'crud-form', component: CrudFormComponent},
  {path: 'crud-form/:id', component: CrudFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
