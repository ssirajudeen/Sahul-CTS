import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IProduct, ProductModel } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //private productUrl = 'api/products/products.json';
  private productUrl = 'http://api.walmartlabs.com/v1/search?apiKey=frt6ajvkqm4aexwjksrukrey&query=iphone';

  constructor(private http: HttpClient) { }

  /*getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }*/

  getProducts() {
    return this.http.get(this.productUrl).pipe(
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<ProductModel | undefined> {
    return this.getProducts().pipe(
      map((products: ProductModel[]) => products.find(p => p.itemId === id))
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
