import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Product } from "../core/models/Product";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  apiUrl:string = 'http://localhost:8080/api/product/';
  constructor(private http : HttpClient) {}

  findAllProduct():Observable<Product[]>{
    console.log(this.http.get<Product[]>(this.apiUrl).subscribe());
    return this.http.get<Product[]>(this.apiUrl);
  }

  findProductByName(name:string):Observable<Product[]>{
    var url = this.apiUrl+name;
    return this.http.get<Product[]>(url);
  }
}