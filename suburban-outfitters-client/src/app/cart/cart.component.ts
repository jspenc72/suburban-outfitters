import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { CartState } from '../store/cart.state';
import { ICartItem } from '../models/cart-item.model';
import { Observable } from 'rxjs/internal/Observable';
import { removeItem } from '@ngxs/store/operators';
import { RemoveItemAction, SubmitOrderAction } from '../store/cart.actions';
import { IProduct } from '../models/product.model';
import { AuthService } from '../services/auth.service';
import { UpdateFormValue } from '@ngxs/form-plugin';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Select(CartState.items) cartItems$: Observable<ICartItem[]>;
  @Select(CartState.itemCount) cartItemCount$: Observable<number>;
  @Select(CartState.total) total$: Observable<number>;

  shippingForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required]
  });

  paymentForm = this.formBuilder.group({
    cardNumber: ['', Validators.required]
  });

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if (this.authService.currentUser) {

      this.store.dispatch(new UpdateFormValue({
        path: 'cartState.shippingForm',
        value: {
          firstName: this.authService.currentUser.firstName,
          lastName: this.authService.currentUser.lastName,
          address: this.authService.currentCustomer.address
        }
      }));
    }
  }

  onRemoveItemFromCart(cartItem: ICartItem) {
    this.store.dispatch(new RemoveItemAction(cartItem));
  }

  onSubmitOrder() {
    console.log('onSubmitOrder');
    this.store.dispatch(new SubmitOrderAction());
  }

}
