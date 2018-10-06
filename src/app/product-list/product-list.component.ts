import { Component, OnInit } from '@angular/core';
import { User } from '../core/models/User';
import { Product } from '../core/models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  user : User;
  constructor() { }

  ngOnInit() {
    this.user = new User()
    this.user.firstName = "Thanh";
    this.user.lastName = "Tran";
    this.user.email = "email@gmail.com";
    this.user.dob = new Date();
    
    var product = new Product();
    product.name = "product 1";
    product.description = "First demo product";
    product.price = 13.5;
    product.quantity = 2;

    var product2 = new Product();
    product2.name = "product 2";
    product2.description = "First demo product";
    product2.price = 13.5;
    product2.quantity = 2;
    this.user.products = new Array<Product>(product, product2);
  }

}
