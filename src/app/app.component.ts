import { ModalService } from './services/modal.service';
import { ProductsService } from './services/products.service';
import { Product } from './models/product';
import { Component, OnInit } from '@angular/core';
import { catchError, tap, Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
