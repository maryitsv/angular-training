import { Injectable } from '@angular/core';
import { Product } from '../types/product';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return [
      { id: 1, name: 'Potatos', available: true },
      { id: 2, name: 'Tomato', available: true },
      { id: 3, name: 'Pumpkin', available: false }
    ];
  }

  getProductsObservable(): Observable<Product[]> {

    const items: Product[] = [
      { id: 1, name: 'Potatos', available: true },
      { id: 2, name: 'Tomato', available: true },
      { id: 3, name: 'Pumpkin', available: false }
    ];


    return of(items).pipe(
      delay(1000),
    );
  }

}
