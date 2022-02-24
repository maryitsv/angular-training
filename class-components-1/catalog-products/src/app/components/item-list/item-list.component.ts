import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {

  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() available: boolean = false;

  @Output() clicked: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClicked(id:number){
    this.clicked.emit("clicked "+ id);
  }
}
