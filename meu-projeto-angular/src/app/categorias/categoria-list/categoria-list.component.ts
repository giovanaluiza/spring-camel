import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  categorias : any = null;

  constructor(private categoriaService : CategoriaService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.categoriaService.getAll()
    .subscribe(
      (data) => {
       this.categorias = data 
      }
    )
  }

  onDelete(id:number){
    this.categoriaService.delete(id)
    .subscribe(
      () =>{
        //this.getAll()
        
        //for(let i = 0; i < this.categorias.data.length; i++){
            
         // if (this.categorias.data[i].id == id){      
           // this.categorias.data.splice(i,1);
          //}funções lambidas
        // } pode escrever como abaixo:  pega x e comprara se o x.id é igual ao id e retorna no let i 

        let i = this.categorias.data.findIndex( (x:any)  => x.id==id );
        this.categorias.data.splice(i,1);
      }
    )
  }

}
