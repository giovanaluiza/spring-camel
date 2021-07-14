import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'error-field-messages',
  templateUrl: './error-field-messages.component.html',
  styleUrls: ['./error-field-messages.component.css']
})
export class ErrorFieldMessagesComponent implements OnInit {
    @Input() field : FormControl | any = null;
    @Input() nome: any


  constructor() { }

  ngOnInit(): void {
  }
  getErrorMessage(){
    if (this.field.errors){
      if (this.field.errors.required){
        return "Campo " + this.nome +" está vazio"
    }    
    else if(this.field.errors.minlength){
      return  "Campo " + this.nome + "precisa ter tamanho mínimo de " + this.field.errors.minlength.requiredLength ;
    }        

      return "Inválido";
    }
  return null;
  }

}
