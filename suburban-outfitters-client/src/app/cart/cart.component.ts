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
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {

    this.shippingForm = this.formBuilder.group({
      firstName: [(this.authService.currentUser ? this.authService.currentUser.firstName : ''), Validators.required],
      lastName: [(this.authService.currentUser ? this.authService.currentUser.lastName : ''), Validators.required],
      address: [(this.authService.currentUser ? this.authService.currentCustomer.address : ''), Validators.required]
    });

  }

  ngOnInit() {
    console.log("test",this.authService.currentUser)
    console.log("test",this.authService.currentCustomer)


    this.shippingForm = this.formBuilder.group({
      firstName: [(this.authService.currentUser ? this.authService.currentUser.firstName : ''), Validators.required],
      lastName: [(this.authService.currentUser ? this.authService.currentUser.lastName : ''), Validators.required],
      address: [(this.authService.currentUser ? this.authService.currentCustomer.address : ''), Validators.required]
    });
    this.paymentForm = this.formBuilder.group({
      cardNumber: ['', Validators.required]
    });
  }

  onRemoveItemFromCart(cartItem: ICartItem) {
    this.store.dispatch(new RemoveItemAction(cartItem));
  }

  onSubmitOrder() {
    console.log("onSubmitOrder");
    this.store.dispatch(new SubmitOrderAction());
  }

}
