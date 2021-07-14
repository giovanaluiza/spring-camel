import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url = `${environment.API}/categories`;
  // // url = `https://gorest.co.in/public-api/categories`;
  auth_token : string = 'f857a95527eb638fe09686c95613f185103e373bb806e8aa11366fd80d477bba';

  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get(this.url);
  }

  getOne( id : number){
    return this.http.get(`${this.url}/${id}`);
  }

  save( category : any ){
    return this.http.post(this.url, category, this.getHeader() )
  }

  update(id : number, category : any){
    return this.http.patch(`${this.url}/${id}`, category, this.getHeader() )
  }

  delete(id : number){
    return this.http.delete(`${this.url}/${id}`, this.getHeader() )
  }

  private getHeader(){
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth_token}`
    });

    return { headers : headers };
  }

}
