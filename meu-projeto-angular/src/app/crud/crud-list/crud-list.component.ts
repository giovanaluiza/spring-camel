import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {

  usuarios : any = null;
  constructor(private crudService : CrudService) {

   }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.crudService.getAll()
      .subscribe(
        (data) => {
          this.usuarios = data;
        }
      );
  }

  onDelete ( id : number ){
    this.crudService.delete ( id )
      .subscribe(
        (data) => {
          this.getAll()
        }
      );
  }

}