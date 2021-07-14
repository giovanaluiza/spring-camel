import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HeaderService } from '../shared/services/header.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoCategoriaService {

  url = `${environment.API}/product-categories`;

  constructor(private http : HttpClient, private header: HeaderService) { }

  save(produto_id: number, categoria_id : number){

    let obj = {
      product_id : produto_id ,
      category_id: categoria_id
    }

    return this.http.post( this.url, obj, this.header.getHeader()  );
  }


}
