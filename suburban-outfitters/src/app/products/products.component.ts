import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  items: any
  featuredItems: any
  query: string
  categories: any
  constructor() { 
    this.categories = [
      { title: "Womens"}, 
      { title: "Accessories"}, 
      { title: "Home"},
      { title: "Kids & Baby"}]
    this.query = ""
    this.featuredItems = [
      { value: 100, image: "https://picsum.photos/200?random=1", description: "Product 1", points: 10}, 
      { value: 100, image: "https://picsum.photos/200?random=2", description: "Product 2", points: 10}, 
      { value: 100, image: "https://picsum.photos/200?random=3", description: "Product 3", points: 10}]
    this.items = [
      { value: 100, image: "https://picsum.photos/200?random=1", description: "Product 1", points: 10}, 
      { value: 100, image: "https://picsum.photos/200?random=2", description: "Product 2", points: 10}, 
      { value: 100, image: "https://picsum.photos/200?random=3", description: "Product 3", points: 10},
      { value: 100, image: "https://picsum.photos/200?random=4", description: "Product 4", points: 10}, 
      { value: 100, image: "https://picsum.photos/200?random=5", description: "Product 5", points: 10}, 
      { value: 100, image: "https://picsum.photos/200?random=6", description: "Product 6", points: 10},
      { value: 100, image: "https://picsum.photos/200?random=7", description: "Product 7", points: 10}, 
      { value: 100, image: "https://picsum.photos/200?random=8", description: "Product 8", points: 10}, 
      { value: 100, image: "https://picsum.photos/200?random=9", description: "Product 9", points: 10},
      { value: 100, image: "https://picsum.photos/200?random=10", description: "Product 10", points: 10}]
  }

  ngOnInit(): void {
  }

}
