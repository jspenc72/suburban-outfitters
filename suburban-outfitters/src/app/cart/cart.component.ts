import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { CartState } from '../store/cart.state';
import { ICartItem } from '../models/cart-item.model';
import { Observable } from 'rxjs/internal/Observable';
import { removeItem } from '@ngxs/store/operators';
import { RemoveItemAction } from '../store/cart.actions';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Select(CartState.items) cartItems$: Observable<ICartItem[]>;
  isLinear = false;
  shippingForm: FormGroup;
  paymentForm: FormGroup;
  panelOpenState = false;

  constructor(
    private store: Store,
    private _formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.shippingForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required]
    });
    this.paymentForm = this._formBuilder.group({
      cardNumber: ['', Validators.required]
    });
  }

  onRemoveItemFromCart(cartItem: ICartItem) {
    this.store.dispatch(new RemoveItemAction(cartItem));
  }

}
