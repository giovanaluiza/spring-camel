import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})
export class UsuarioDetalheComponent implements OnInit {

  @Input() usuariosFilho : any ;
  @Output() usuarioEmitter = new EventEmitter<string>();

  @Output() usuarioSalvarEmitter = new EventEmitter<any>();
  

  constructor() { 
    console.log(this.usuariosFilho);
  }

  ngOnInit(): void {
    console.log(this.usuariosFilho);
    this.usuarioEmitter.next("Oiiiii")
  }
clickButton(){
  this.usuarioEmitter.next("Oiiiii")
}

onSalvarClick(nome : string, email:string){
  console.log(this.usuariosFilho)

  let  obj = {
    id: this.usuariosFilho.id,
    nome: nome,
    email:email
  }
  this.usuarioSalvarEmitter.next(obj)

}

}
