import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";
import {AuthService} from "./auth.service";
import {HomeComponent} from "../pages/home/home.component";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private authService : AuthService) { }

  products : Product[] = [
    {
      id: 1,
      name: 'Lamborghini Urus S 2024',
      price: 1000000,
      description: 'Xịn',
      inStock: 10,
      imageUrl: '../assets/images/lamborghini-urus-s-2024.jpg',
    },

    {
      id: 2,
      name: 'Ferrari 812 GTS 2024',
      price: 500000,
      description: 'Hơi Xịn',
      inStock: 5,
      imageUrl: '../assets/images/ferrari-812-gts-2024.jpg',
    },

    {
      id: 3,
      name: 'Porsche 911 GT3 2024',
      price: 250000,
      description: 'Xịn +1',
      inStock: 7,
      imageUrl: '../assets/images/porsche-911-gt3-2024.jpg',
    }
  ];
  total: number = 0;
  cart: any = [];

  addToCart(item: any) {
    if (this.authService.currentUser == null) {
      alert('Bạn cần đăng nhập để thêm vào giỏ hàng');
      return;
    }
    console.log(item);
    console.log(item.id);
    console.log(this.cart);

    let findIndex = this.cart.findIndex((element:any) => element.id == item.id);
    let findIndex1 = this.products.findIndex((element) => element.id == item.id);

    if (this.products[findIndex1].quantity == 0) {
      return;
    }

    if (findIndex != -1) {
      this.cart[findIndex].quantity += 1;
      this.products[findIndex1].inStock -= 1;
    } else {
      this.cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        imageUrl: item.imageUrl,
      });
      this.products[findIndex1].inStock -= 1;
    }
    console.log(this.products[findIndex1].quantity);
    this.totalCost();
  }

  deleteCart(product: Product) {
    if (this.authService.currentUser) {
      let productIndexInCart = this.cart.findIndex((p: any) => p.id === product.id);
      let productIndexInStock = this.products.findIndex((p: any) => p.id === product.id);

      if (productIndexInCart !== -1 && productIndexInStock !== -1) {
        if (this.cart[productIndexInCart].quantity === 1) {
          this.cart.splice(productIndexInCart, 1);
        } else {
          this.cart[productIndexInCart].quantity--;
        }
        this.products[productIndexInStock].inStock++;
        console.log(this.cart);
      }
    } else {
      alert('Please login to remove product from cart');
    }
  }

  deleteAllFromCart() {
    for (let product of this.cart) {
      for (let product2 of this.products) {
        if (product.id == product2.id) {
          product2.quantity += product.quantity;
          console.log(product2.quantity);
        }
      }
    }
    this.cart = [];
    this.total = 0;
  }

  processPayment() {
    if (this.cart.length > 0) {
      alert('Thanh toán thành công sản phẩm');
      this.cart = [];
      this.total = 0;
    } else {
      alert('Giỏ hàng của bạn đang trống');
      console.log(this.cart);
    }
  }
  totalCost() {
    this.total = 0;
    for (let item of this.cart) {
      this.total += item.price * item.quantity;
    }
    return this.total;
  }

  }
