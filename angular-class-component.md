# Create a new component
to create new components, services, intefaces you can use the angular cli
```
ng g c list 
or
ng g c components/list 
```
others
```
ng g s products
ng g s services/products
ng g interface types/product
```


## What is a component?
Components are the most basic UI building block of an Angular app. An Angular app contains a tree of Angular components.
https://angular.io/api/core/Component#description

### Component anatomy
In a component we have:
- html file
- class ts file
- styles file
[![N|databinding](https://docs.angular.lat/generated/images/guide/architecture/component-databinding.png)](https://docs.angular.lat/generated/images/guide/architecture/component-databinding.png)

### Comunicating components
It can have:
@Input(): pass a parameters to the component 
@Output(): emit an event to the parent when something happen
[![N|databindingparentchild](https://docs.angular.lat/generated/images/guide/architecture/parent-child-binding.png)](https://docs.angular.lat/generated/images/guide/architecture/parent-child-binding.png)

binding, it can be one way or two ways databinding

[![N|databindingparentchild](https://docs.angular.lat/generated/images/guide/architecture/databinding.png)](https://docs.angular.lat/generated/images/guide/architecture/databinding.png)

### Component lyfecicle 
The most used hooks are onInit and onDestroy.
https://angular.io/guide/lifecycle-hooks
[![N|databindingparentchild](https://dotnettrickscloud.blob.core.windows.net/img/angular/angular-lifecycle-hooks.png)](https://dotnettrickscloud.blob.core.windows.net/img/angular/angular-lifecycle-hooks.png)

check the example
https://medium.com/angular-chile/angular-componentes-y-sus-ciclos-de-vida-aa639e13a688


### Practice

go to the list component in the ts file
```
  productsList = [
    { id: 1, name: 'Potatos', available: true },
    { id: 2, name: 'Tomato', available: true },
    { id: 3, name: 'Pumpkin', available: true }
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

Suggestions:

Dont
do not have huge logic in the onInit
forget to unsuscribe
do not use view encapsulation none if you dont need it

Do
encapsulate in methods the logic you have and call that function in the oninit
unsuscribe usign the onDestroy
if you use view encapsulation none be aware this will modify other components, so better put inside a style
