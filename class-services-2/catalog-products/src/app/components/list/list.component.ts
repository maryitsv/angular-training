import { AfterViewInit, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListComponent implements OnInit, OnDestroy, AfterViewInit {

  productsList : Product[] = [];

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    console.log("hey ngOnInit");
    this.loadProducts();
  }

  loadProducts() {
    // this.productsList = this.productsService.getProducts();
    this.productsService.getProductsObservable().subscribe(result=>{
      this.productsList = result;
    });    
  }

  ngOnDestroy(): void{
    console.log("hey ngOnDestroy");  
  }

  ngAfterViewInit(): void{
    console.log("hey ngAfterViewInit");  
  }

  itemClicked(event:Product) {
    console.log(event);
  }
}
