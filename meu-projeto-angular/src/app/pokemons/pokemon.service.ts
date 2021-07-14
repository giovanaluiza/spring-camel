import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }
//limit da pagina
  getAll(offset: number, limit : number){
    return this.http.get("https://pokeapi.co/api/v2/pokemon?offset=" + offset + "&limit=" + limit);
 }
// count % this.limit == 0  if e else 0>1- faz 
 getOne(url:string){
   return this.http.get(url)
 }

}
