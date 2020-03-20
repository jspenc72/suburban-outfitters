import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, RouterState } from '@angular/router';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  items: IProduct[];
  featuredItems: IProduct[];
  categories: any;
  searchValue: string;

  constructor(private router: Router) {
    this.searchValue = '';

    this.categories = ['Womens', 'Mens', 'Kids', 'Accessories'];
    this.featuredItems = [
      { id: 1, name: 'Product 1', image: 'https://picsum.photos/200?random=1', description: 'Product 1 Description', price: 10, size: 'M', gender: 'W', category: 'Womens' },
      { id: 2, name: 'Product 2', image: 'https://picsum.photos/200?random=2', description: 'Product 2 Description', price: 15, size: 'M', gender: 'W', category: 'Womens' },
      { id: 3, name: 'Product 3', image: 'https://picsum.photos/200?random=3', description: 'Product 3 Description', price: 20, size: 'M', gender: 'W', category: 'Womens' }];
    this.items = [
      { id: 1, name: 'Product 1', image: 'https://picsum.photos/200?random=11', description: 'Product 1 Description', price: 10, size: 'M', gender: 'W', category: 'Womens' },
      { id: 2, name: 'Product 2', image: 'https://picsum.photos/200?random=12', description: 'Product 2 Description', price: 15, size: 'M', gender: 'W', category: 'Womens' },
      { id: 3, name: 'Product 3', image: 'https://picsum.photos/200?random=13', description: 'Product 3 Description', price: 20, size: 'M', gender: 'W', category: 'Womens' },
      { id: 4, name: 'Product 4', image: 'https://picsum.photos/200?random=4', description: 'Product 4 Description', price: 25, size: 'M', gender: 'W', category: 'Men ' },
      { id: 5, name: 'Product 5', image: 'https://picsum.photos/200?random=5', description: 'Product 5 Description', price: 30, size: 'M', gender: 'W', category: 'Men ' },
      { id: 6, name: 'Product 6', image: 'https://picsum.photos/200?random=6', description: 'Product 6 Description', price: 35, size: 'M', gender: 'W', category: 'Womens Accessories' },
      { id: 3, name: 'Product 7', image: 'https://picsum.photos/200?random=7', description: 'Product 7 Description', price: 40, size: 'M', gender: 'W', category: 'Womens Accessories' },
      { id: 4, name: 'Product 8', image: 'https://picsum.photos/200?random=8', description: 'Product 8 Description', price: 45, size: 'M', gender: 'W', category: 'Womens Accessories' },
      { id: 5, name: 'Product 9', image: 'https://picsum.photos/200?random=9', description: 'Product 9 Description', price: 50, size: 'M', gender: 'W', category: 'Womens Accessories' },
      { id: 6, name: 'Product 10', image: 'https://picsum.photos/200?random=10', description: 'Product 10 Description', price: 55, size: 'M', gender: 'W', category: 'Kids' }];
  }

  displayProductDetail(item): void {
    console.log('displayProductDetail');
    console.log(item);
    this.router.navigateByUrl('/product-detail', { state: { item } });
  }

  filterByCategory(category): void {
    if(this.searchValue.includes(category)) {
      this.searchValue = this.searchValue.replace(category, "");
    }else {
      this.searchValue += category
    }
  }

  ngOnInit(): void {
  }

}
