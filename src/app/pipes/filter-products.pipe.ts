import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts',
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: Product[], search: string): Product[] {
    if (!search.length) return products;
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }
}
