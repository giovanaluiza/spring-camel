import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { ProdutoCategoriaService } from '../produto-categoria.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  meuForm : FormGroup | any = null;
  categorias : any = null;

  constructor(
    private formBuilder : FormBuilder, 
    private produtoService : ProdutoService,
    private categoriaService : CategoriaService,
    private produtoCategoriaService : ProdutoCategoriaService) { }

  ngOnInit(): void {
    this.createForm();
    this.getAllCategorias();
  }

  private getAllCategorias(){
    this.categoriaService.getAll()
      .subscribe(
        (data)=> {
          this.categorias = data;
        }
      );
  }

  private createForm(){
    this.meuForm = this.formBuilder.group(
      {
        name : [null, [Validators.required]],
        price : [null, [Validators.required]],
        status : [null, [Validators.required]],
        description : [null, [Validators.required]],
        image : [null, [Validators.required]],
        categories : [null, [Validators.required]],
      }
    );
  }

  public onSubmit(){

    this.produtoService.save(this.meuForm.value)
      .subscribe(
        (response : any) => {
          console.log(response)
          let produto_id = response.data.id;
          let categoria_id = this.meuForm.get('categories').value;
          console.log (produto_id, categoria_id)

          this.produtoCategoriaService.save(produto_id, categoria_id)
            .subscribe(
              () => {
                console.log ("Salvou produto-categoria com sucesso")
              }
            )
        }
      );
  }

}
