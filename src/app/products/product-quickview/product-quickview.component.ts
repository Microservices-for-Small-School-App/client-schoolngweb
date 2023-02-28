import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { IProductQuickView } from './iproduct-quickview';

@Component({
  selector: 'app-product-quickview',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    NgOptimizedImage,
  ],
  templateUrl: './product-quickview.component.html',
  styleUrls: ['./product-quickview.component.scss']
})
export class ProductQuickviewComponent {

  @Input()
  product: IProductQuickView = {} as IProductQuickView;

  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
  }
}
