import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  cart: Cart = { items: [{
    product: 'https://via.placeholder.com/150',
    name: 'snickers',
    price: 150,
    quantity: 1,
    id: 1,
}]};

dataSource: Array<CartItem> = [];
displayColumns: Array<string> = [
  'product',
  'name',
  'price',
  'total',
  'action'
];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

}