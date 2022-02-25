import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductCategory } from 'src/app/model/product-category';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {

  @Input() product: Product = {id:0,name:"",available:false};

  @Output() clicked: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClicked(){
    this.clicked.emit(this.product);
  }
}
