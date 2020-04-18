import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { CartState } from '../store/cart.state';
import { ICartItem } from '../models/cart-item.model';
import { Observable } from 'rxjs/internal/Observable';
import { removeItem } from '@ngxs/store/operators';
import { RemoveItemAction, SubmitOrderAction } from '../store/cart.actions';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Select(CartState.items) cartItems$: Observable<ICartItem[]>;
  @Select(CartState.itemCount) cartItemCount$: Observable<number>;
  @Select(CartState.total) total$: Observable<number>;
  shippingForm: FormGroup;
  paymentForm: FormGroup;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.shippingForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required]
    });
    this.paymentForm = this.formBuilder.group({
      cardNumber: ['', Validators.required]
    });
  }

  onRemoveItemFromCart(cartItem: ICartItem) {
    this.store.dispatch(new RemoveItemAction(cartItem));
  }

  onSubmitOrder() {
    this.store.dispatch(new SubmitOrderAction());
  }

}
