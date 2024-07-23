import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.components.html'
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;

  constructor() { }

  ngOnInit(): void {
  }

}
