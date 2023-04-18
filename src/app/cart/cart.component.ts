import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cartservice/cart.service';
import { p_interface } from '../products/data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartservice: CartService) { }

  Products: p_interface[] = []

  ngOnInit(): void {
    this.Products = this.cartservice.getcart()
  }

  // increase(p_id: number, quantity: number) {

  // }

  // decrease(p_id: number, quantity: number) {

  // }
  increase(Products: p_interface[], id: any, quantity: number) {
    // console.log(product.id)
    const productToUpdate = this.Products.find((product:p_interface) => product.id === id);
    const localcart = this.cartservice.getcart()
    const productToUpdateinLocalStorage = localcart.find((product: p_interface) => product.id === id);
    console.log(productToUpdateinLocalStorage)
   
    if (productToUpdate && productToUpdateinLocalStorage) {

      productToUpdate.p_quantity += quantity;
      localStorage.setItem('localcart', JSON.stringify(Products))
      let newQuantity = productToUpdateinLocalStorage.p_quantity += quantity;

      if (newQuantity > 5) {
        productToUpdate.p_quantity = 5;
        alert(`maximum quantity of 5`);
      } else {
        productToUpdate.p_quantity = newQuantity;
        console.log('quanitity increased');
      }


    } else {
      console.log(`Product with ID ${id} not found.`);
    }

  }

  decrease(Products: p_interface[], id: any, quantity: number) {
    // console.log(product.id)
    const productToUpdate = this.Products.find((product: p_interface) => product.id === id);
    const localcart = this.cartservice.getcart()
    const productToUpdateinLocalStorage = localcart.find((product: p_interface) => product.id === id);
    console.log(productToUpdateinLocalStorage)

    if (productToUpdate && productToUpdateinLocalStorage) {

      productToUpdate.p_quantity -= quantity;
      localStorage.setItem('localcart', JSON.stringify(Products))
      let newQuantity = productToUpdateinLocalStorage.p_quantity -= quantity;

      if (newQuantity < 1) {
        productToUpdate.p_quantity = 1;
        alert(`minimum quantity of 1`);
      } else {
        productToUpdate.p_quantity = newQuantity;
        console.log('quanitity qu');
      }


    } else {
      console.log(`Product with ID ${id} not found.`);
    }

  }

}
