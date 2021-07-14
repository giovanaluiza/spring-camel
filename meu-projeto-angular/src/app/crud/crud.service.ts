
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  auth_token : string = 'f857a95527eb638fe09686c95613f185103e373bb806e8aa11366fd80d477bba';
  url = `https://gorest.co.in/public-api/users`;

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url);
  }

  getOne( id : number){
    return this.http.get(`${this.url}/${id}`);
  }

  save(user : any){

    return this.http.post(this.url, user, this.getHeader() );
  }

  delete ( id : number ){

    return this.http.delete(`${this.url}/${id}`, this.getHeader() );
  }

  update(id:number, user:any){
    return this.http.patch(`${this.url}/${id}`, user, this.getHeader() );
  }

  private getHeader(){
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth_token}`
    });

    return { headers : headers };
  }

}
