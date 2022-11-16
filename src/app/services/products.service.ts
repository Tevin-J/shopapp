import { catchError, delay, Observable, retry, throwError, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Product } from '../models/product';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl = 'https://fakestoreapi.com/';
  products: Product[] = [];
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getAll(): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${this.baseUrl}products`, {
        params: new HttpParams().append('limit', 5),
      })
      .pipe(
        delay(1000),
        retry(2),
        tap((products) => (this.products = products)),
        catchError(this.errorHandler.bind(this))
      );
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}products`, product).pipe(
      tap((product) => this.products.push(product)),
      catchError(this.errorHandler.bind(this))
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
