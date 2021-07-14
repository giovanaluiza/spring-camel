import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {
pokemons :any=null
pokemonSelecionado: any= null;
//definiu a variavel 
offset : number=0;
limit : number=5;

  constructor(private pokemonService : PokemonService, private ac:ActivatedRoute ) { }

  ngOnInit(): void {
    this.ac.queryParams
    .subscribe( (params:any) =>{
      console.log(params);
    }
    );
    this.pokemonService.getAll(this.offset, this.limit)
        .subscribe( (x) => {
      this.pokemons = x;
      console.log(this.pokemons)
    } );

    }

    selecionarPokemon (url : string ){
      this.pokemonService.getOne(url)
      .subscribe ( (x) => {
        this.pokemonSelecionado = x
        console.log(this.pokemonSelecionado)
      });
    }
//- criando um botão
      proximaPagina(){
        
        this.offset += this.limit;

        this.pokemonService.getAll(this.offset, this.limit)
        .subscribe(
          (data:any) =>{
            this.pokemons=data;

          }
        );

      }
    }
  