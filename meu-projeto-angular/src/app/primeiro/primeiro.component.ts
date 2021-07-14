import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent implements OnInit {

  minhaClasse = "btn-success"



  constructor() { }
  
  ngOnInit(): void {
  }

  alteraString(){
    //this.minhaClasse = "btn-danger"
    if (this.minhaClasse == "btn-danger"){
      this.minhaClasse = "btn-success";
    }else{
      this.minhaClasse = "btn-danger";
    }

  }



}
