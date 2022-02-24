
# What is a component?
Components are the most basic UI building block of an Angular app. An Angular app contains a tree of Angular components.
https://angular.io/api/core/Component#description

# Create a new component
to create new components you can use the angular cli
```
ng g c product
or
ng generate component product
```
others
```
ng g s products
ng g s services/products
ng g interface types/product
```

## Component anatomy
In a component we have:
- html file
- class ts file
- styles file

[![N|databinding](https://docs.angular.lat/generated/images/guide/architecture/component-databinding.png)](https://docs.angular.lat/generated/images/guide/architecture/component-databinding.png)

## Comunicating components
It can have:
 - @Input(): pass a parameters to the component
 - @Output(): emit an event to the parent when something happen

[![N|databindingparentchild](https://docs.angular.lat/generated/images/guide/architecture/parent-child-binding.png)](https://docs.angular.lat/generated/images/guide/architecture/parent-child-binding.png)

binding, it can be one way or two ways databinding

[![N|databindingparentchild](https://docs.angular.lat/generated/images/guide/architecture/databinding.png)](https://docs.angular.lat/generated/images/guide/architecture/databinding.png)

## Component lyfecicle 
The most used hooks are onInit and onDestroy.

https://angular.io/guide/lifecycle-hooks
[![N|databindingparentchild](https://dotnettrickscloud.blob.core.windows.net/img/angular/angular-lifecycle-hooks.png)](https://dotnettrickscloud.blob.core.windows.net/img/angular/angular-lifecycle-hooks.png)

check the example
https://medium.com/angular-chile/angular-componentes-y-sus-ciclos-de-vida-aa639e13a688


# Practice
# Create a new component
to create new components, services, intefaces you can use the angular cli
```
ng g c components/list 
```

## Create List component
go to the list component in the ts file
```
  productsList = [
    { id: 1, name: 'Potatos', available: true },
    { id: 2, name: 'Tomato', available: true },
    { id: 3, name: 'Pumpkin', available: true },
    { id: 4, name: 'Avocado', available: true }
  ];
```

go to the list component in the html
```
<div *ngFor="let product of productsList">
    <div>{{product.id}}</div>
    <div>{{product.name}}</div>
</div>
```

add in the app-routing.module.ts
```
const routes: Routes = [{
  path:'list', component:ListComponent,
  path:'**', component:ListComponent
}];
```
lets navigate to the app to see how the page looks, you should see a list of products

## Create Item List component

Lets review how to comunicate a child and a parent components
```
ng g c components/item-list
```

in the item-list add the following inputs

### Add input and output decorators
```
import { Input, Output } from '@angular/core';

export class ItemListComponent implements OnInit {
  ...
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() available: boolean = false;

  @Output() clicked: EventEmitter<string> = new EventEmitter();

  onClicked(id:number){
    this.clicked.emit("clicked "+ id);
  }

  ...
}
```

in the item-list html
```
<div class="box" (click)="onClicked(id)">
    <div>{{id}}</div>
    <div>{{name}}</div>
    <div *ngIf="available">in stock</div>
</div>
```

In the list component html
```
<p class="box">list works!</p>
<div *ngFor="let product of productsList">
    <app-item-list
        [id]="product.id"
        [name]="product.name"
        [available]="product.available"
        (clicked)="itemClicked($event)"></app-item-list>
</div>
```

In the list component ts add the function
```
  itemClicked(event:string) {
    console.log(event)
  }
```

### View encapsulation

The styles affect only the component if the encapsulation: ViewEncapsulation.Emulated that is the default, but if we use encapsulation: ViewEncapsulation.None, we will affect other components styles

in the list component ts add the view encapsulation
```
  @Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
```

go to the list scss
```
.box{
    background: red;
}
```

go to the item-list scss
```
.box{
    border: solid blue 1px;
}
```

let see how the page looks

Now lets go to the list component ts
```
  @Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
```

let see how the page looks and how ViewEncapsulation.None affects the page

### lifecycle
```
ng g c components/help
```

in the app routing module add the route
```
const routes: Routes = [
  {
    path: 'list', component: ListComponent
  },
  {
    path: 'help', component: HelpComponent
  },
  {
    path: '**', component: ListComponent
  }];
```

lets go to the list component ts and add some lifecycle hooks
```
export class ListComponent implements OnInit, OnDestroy, AfterViewInit {
  ...
  ngOnInit(): void {
    console.log("hey ngOnInit");
    // keep this small
  }

  ngOnDestroy(): void{
    console.log("hey ngOnDestroy");  
    // if you subscribe to observables make sure you unsubscribe
  }

  ngAfterViewInit(): void{
    console.log("hey ngAfterViewInit");
    // ideal to do thing in view child components
  }
  ....
```

in the app component html
```
<a routerLink="/help">Help</a>
<a routerLink="/list">List</a>
```

Suggestions for components:

Dont
do not have huge logic in the onInit
forget to unsuscribe
do not use view encapsulation none if you dont need it

Do
encapsulate in methods the logic you have and call that function in the oninit
unsuscribe usign the onDestroy if required
if you use view encapsulation none be aware this will modify other components, so better put inside a style

