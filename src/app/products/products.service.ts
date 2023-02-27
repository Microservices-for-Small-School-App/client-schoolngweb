import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, delay } from 'rxjs';
import { IProduct } from './iproduct';
import { getQuickViewsFromProducts } from './products.utilities';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products = new BehaviorSubject<IProduct[]>([]);
  products$ = this.products.asObservable();

  productQuickViews$ = this.products.pipe(map(getQuickViewsFromProducts));

  private isLoadingContent = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingContent.asObservable();

  constructor(private httpClient: HttpClient) { }

  getProducts(): void {

    this.isLoadingContent.next(true);

    this.httpClient.get<IProduct[]>('https://dummyjson.com/products?limit=10')
      .pipe(
        delay(1000)
      )
      .subscribe({
        next: (payload: any) => {
          this.products.next(payload.products);
        },
        error: err => {
          console.warn(err);
        },
        complete: () => {
          this.isLoadingContent.next(false);
        }
      });
  }

}
