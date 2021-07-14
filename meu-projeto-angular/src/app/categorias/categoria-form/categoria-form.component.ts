import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

  meuForm : FormGroup | any = null;

  isEdicao  : boolean = false;
  id : number = 0;

  constructor(
    private categoriaService: CategoriaService,
    private formBuilder : FormBuilder,
    private activatedRoute : ActivatedRoute, 
    private router : Router) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .subscribe(
        (params : any) => {
          if (params.id){
            this.isEdicao = true;
            this.id = params.id
            
            this.categoriaService.getOne( this.id )
              .subscribe( 
                (response : any) => {
                  // atualiza o form - Precisamos fazer ainda
                  this.meuForm.patchValue(response.data)
                }
              )
          }          
        }
      );

      this.meuForm = this.formBuilder.group(
        {
          name : [ null, [Validators.required] ],
          description : [ null, [Validators.required ]],
          status : [null, [ Validators.required] ]
        }
      );
  }

  onSubmit(){

    //edicao
    if (this.isEdicao){
      this.categoriaService.update(this.id, this.meuForm.value)
        .subscribe(
          (data) => {
            this.router.navigate( [ '/categorias/categoria-list']);
          }
        )
    }
    //novo
    else {
      this.categoriaService.save(this.meuForm.value)
        .subscribe(
          (data) => {
            this.meuForm.reset();
            this.router.navigate ( ['/categorias/categoria-list'] );
          }
        )
    }
  }


}

