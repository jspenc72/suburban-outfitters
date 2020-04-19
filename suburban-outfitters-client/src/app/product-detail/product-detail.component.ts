import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { RouterModule, Routes, Router, RouterState, NavigationStart, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngxs/store';
import { AddItemAction } from '../store/cart.actions';
import { ICartItem } from '../models/cart-item.model';
import { IProduct } from '../models/product.model';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  faFacebookF = faFacebookF;
  item: IProduct;
  state$: any
  sub: any
  constructor(
    private location: Location,
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private store: Store) {
    // this.item = { title: "card1", type: "", value: 100, image: "https://d2e70e9yced57e.cloudfront.net/wallethub/posts/68808/best-gift-cards.png", description: "Chick Fila-A $10 Gift Card", points: 10}
  }

  ngOnInit(): void {
    console.log(this.location.getState());
    this.state$ = this.location.getState();

    if (!this.state$.item) {
        this.router.navigateByUrl('/products');
    } else {
      this.item = this.state$.item;
    }
  }

  addItemToCart(item: IProduct): void {
    const cartItem: ICartItem = {
      product_id: item.id,
      inventory_id: 1,
      name: item.name,
      image: item.image_url,
      description: item.description,
      size: item.size,
      gender: item.gender,
      category: item.category,
      price: item.price,
      quantity: 1
    };

    this.store.dispatch(new AddItemAction(cartItem));
  }

}
