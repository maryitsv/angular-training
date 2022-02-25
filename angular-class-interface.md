Lets take advantage of typescript, we use typescript to detect errors early in the code.

# Angular Interfaces

Recomended if you just need the type checking
https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html


## Create an interface

to create new interfaces you can use angular cli
```
ng g i types/product
```

now lets go and add some details to the interface
```
export interface Product {
    id: number;
    name: string;
    available: boolean;
    color?: string; // ? to indicate something is optional it can be defined or undefined
    sizes?: string[]; 
    details?: { // you can have objects
        description: string;
        urlPictures: string[]; // you can have arrays of ...
        other: any; // you can have any which means whatever thing the transpiler is not going to do anything to try to guess what is this
        objectInternalStructure: unknown;// unknown the transpiler is going to try to guess what is this
        dictionary:{ // to have dictionaries
            [key:string]: string;
        },
        presentation: "box" | "pyloras" | "syrup"; // union
    }
}
```

## Use the new interface in our components

Let use this new inteface in the list component and in the item list component

in the list component ts
```
  productsList : Product[] = [
    { id: 1, name: 'Potatos', available: true },
    { id: 2, name: 'Tomato', available: true },
    { id: 3, name: 'Pumpkin', available: false }
  ];

...

  itemClicked(event:Product) {
    console.log(event);
  }
```
in the list html
```
    <app-item-list
        [product]="product"
        (clicked)="itemClicked($event)"></app-item-list>
```


in the item list component ts
```
  @Input() product: Product = {id:0,name:"",available:false};

  @Output() clicked: EventEmitter<Product> = new EventEmitter();

...

  onClicked(){
    this.clicked.emit(this.product);
  }

```

in the item list component html
```
<div class="box" (click)="onClicked()">
    <div>{{product.id}}</div>
    <div>{{product.name}}</div>
    <div *ngIf="product.available">in stock</div>
</div>
```


## See how this help us

- Try to access a property that does not exists in the item list
- Try to call itemClicked with something that does not match the parameter
- Try to create a new product without the required fields


# Create a class

You can have Clases, recomended if you have logic tie to the model, it also has type checking
```
ng g class model/product-category
```

You can have the fields of the class and set the properties you can have methods
```
    public id: number = 0;
    public name: string = "";

    constructor(id:number, name:string) {
        this.id = id;
        this.name = name;
    }

    getCategoryComplexName(): string {
        return this.id + this.name;
    }
```
or
```
    constructor(public id:number, public name:string) {
    }
```

sample
```
    const test = new ProductCategory(this.product.id,"asd");
    console.log(test)
```
