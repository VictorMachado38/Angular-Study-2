import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import {HttpClient} from "@angular/common/http";
import {Product} from "./product.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    baseUrl= "http://localhost:3001/products"

  constructor(private snckBar: MatSnackBar, private http: HttpClient) { }

  showOnConsolo(msg: string): void{
    console.log(msg)
     this.snckBar.open(msg, 'Fechar a porra da mansegen',{
       duration: 5000,
       horizontalPosition: "right",
       verticalPosition: "top"
     })
  }
  create(product: Product): Observable<Product>{
      return this.http.post<Product>(this.baseUrl, product)
  }

  read(): Observable<Product[]>{
        return this.http.get<Product[]>(this.baseUrl)

  }


}
