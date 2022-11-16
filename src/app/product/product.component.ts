import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  details = false;
  constructor() {}

  ngOnInit(): void {}

  onDetailsClick(): void {
    this.details = !this.details;
  }
}
