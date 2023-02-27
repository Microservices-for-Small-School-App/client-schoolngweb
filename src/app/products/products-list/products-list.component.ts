import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Subscription, take } from 'rxjs';
import { MatPaginatorModule } from '@angular/material/paginator'

import { ProductsService } from '../products.service';
import { ProductQuickviewComponent } from '../product-quickview/product-quickview.component';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    ProductQuickviewComponent,
    HttpClientModule
  ],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  subscriptions = new Subscription();

  constructor(public productsService: ProductsService) {
  }

  private onProducts(products: IProduct[]) {
    if (products.length === 0) {
      this.productsService.getProducts();
    }
  }

  ngOnInit(): void {

    this.subscriptions.add(
      this.productsService.products$
        .subscribe({
          next: this.onProducts.bind(this),
          error: console.warn
        })
    );

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
