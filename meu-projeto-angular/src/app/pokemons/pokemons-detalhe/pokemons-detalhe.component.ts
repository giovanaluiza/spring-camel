import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons-detalhe',
  templateUrl: './pokemons-detalhe.component.html',
  styleUrls: ['./pokemons-detalhe.component.css']
})
export class PokemonsDetalheComponent implements OnInit {
  
  @Input() pokemonFilho : any = null
  constructor() { }

  ngOnInit(): void {
  }

}
