import { AfterViewInit, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListComponent implements OnInit, OnDestroy, AfterViewInit {

  productsList = [
    { id: 1, name: 'Potatos', available: true },
    { id: 2, name: 'Tomato', available: true },
    { id: 3, name: 'Pumpkin', available: false }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log("hey ngOnInit");
  }

  ngOnDestroy(): void{
    console.log("hey ngOnDestroy");  
  }

  ngAfterViewInit(): void{
    console.log("hey ngAfterViewInit");  
  }

  itemClicked(event:string) {
    console.log(event)
  }
}
