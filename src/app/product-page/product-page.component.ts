import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  title = 'angular app';
  loading = false;
  term = '';

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll().subscribe(() => (this.loading = false));
  }
}
