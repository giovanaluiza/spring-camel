import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HeaderService } from '../shared/services/header.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  url = `${environment.API}/products`;

  constructor(private http : HttpClient, private headerService : HeaderService) { }
  getAll(){
    return this.http.get(this.url);
  }

  getOne(id : number){
    return this.http.get(`${this.url}/${id}`);
  }
  save( produtos : any ){
    return this.http.post( this.url, produtos, this.headerService.getHeader() )
  }

  update(id : number, produto : any){
    return this.http.patch( `${this.url}/${id}`, produto, this.headerService.getHeader()  )
  }

  delete(id : number){
    return this.http.delete(`${this.url}/${id}`, this.headerService.getHeader() );
  }
}
