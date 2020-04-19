import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { RouterModule, Routes, Router, RouterState, NavigationStart, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngxs/store';
import { AddItemAction } from '../store/cart.actions';
import { ICartItem } from '../models/cart-item.model';
import { IProduct } from '../models/product.model';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { InventoryService } from '../services/inventory.service';
import { IInventory } from '../models/inventory.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  faFacebookF = faFacebookF;
  item: IProduct;
  inventory: IInventory;
  state$: any
  sub: any
  constructor(
    private location: Location,
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private store: Store,
    private inventoryService: InventoryService) { }

  ngOnInit(): void {
    console.log(this.location.getState());
    this.state$ = this.location.getState();

    if (!this.state$.item) {
        this.router.navigateByUrl('/products');
    } else {
      this.item = this.state$.item;
      this.inventoryService.getBy(this.item.id).subscribe((data: IInventory) => {
        this.inventory = data;
      });
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
