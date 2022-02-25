# Angular Services

## Why services
Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. They should focus on presenting data and delegate data access to a service.

The services can also help us to share information between components, they can be singleton for the app if we use the provide in root.

The components use injection dependencie to ask the injector for a service.

[![N|services](https://angular.io/generated/images/guide/architecture/injector-injects.png)](https://angular.io/generated/images/guide/architecture/injector-injects.png)

For more details
https://angular.io/guide/architecture-services

## Practice
```
ng g s services/products
```

## Create a getProducts

lets add a function that return the products in the service
```
  getProducts(): Product[] {
    return [
      { id: 1, name: 'Potatos', available: true },
      { id: 2, name: 'Tomato', available: true },
      { id: 3, name: 'Pumpkin', available: false }
    ];
  }
```

Now in the list component

```
  productsList : Product[] = [];

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    console.log("hey ngOnInit");
    this.loadProducts();
  }

  loadProducts() {
    this.productsList = this.productsService.getProducts();
  }
```

## let try with an observable

in the service add
```

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
```


In the list component ts
``` 
  loadProducts() {
    // this.productsList = this.productsService.getProducts();
    this.productsService.getProductsObservable().subscribe(result=>{
      this.productsList = result;
    });
    
  }
```

please check the https://www.learnrxjs.io/ you may need to know.






