import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ProductListService
{
  constructor(private http:HttpClient,private http1:HttpClient){

  }

  getProduct(){
      //debugger;
      return this.http.get("https://localhost:44369/getproducts");

  }
}