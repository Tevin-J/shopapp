import { ProductsService } from './../services/products.service';
import { ModalService } from './../services/modal.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-generate-product',
  templateUrl: './generate-product.component.html',
  styleUrls: ['./generate-product.component.scss'],
})
export class GenerateProductComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  constructor(
    private modalService: ModalService,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {}

  get title(): FormControl {
    return this.form.controls.title as FormControl;
  }

  onSubmit() {
    console.log(this.form.value);
    this.productService
      .create({
        title: this.form.value.title,
        price: 23,
        description: 'test description',
        rating: {
          rate: 4,
          count: 3,
        },
        category: 'test category',
        image: 'https://i.pravatar.cc',
      })
      .subscribe(() => {
        this.modalService.close();
      });
  }
}
